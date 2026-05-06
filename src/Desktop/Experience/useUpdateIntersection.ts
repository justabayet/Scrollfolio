import { Object3D, Plane, Quaternion, Raycaster, Vector2, Vector3 } from "three"
import { isInsideOrClosest } from "../geometryUtils"
import { pointer } from "../hooks/usePointerTracking"
import useActionArea from "./useActionArea"
import { useFrame } from "@react-three/fiber"
import { type RefObject } from "react"

const _worldNormal = new Vector3()
const _worldPoint = new Vector3()
const _targetPlane = new Plane()
const _intersection2D = new Vector2()
export const _intersectionPoint = new Vector3()

const raycaster = new Raycaster()

export default function useUpdateIntersection(ref: RefObject<Object3D>) {
    const points = useActionArea()

    useFrame(({ camera }) => {
        if (ref.current) {
            ref.current.localToWorld(_worldPoint.set(0, 0.19, 0))

            _worldNormal.set(0, 1, 0).applyQuaternion(ref.current.getWorldQuaternion(new Quaternion()))

            _targetPlane.setFromNormalAndCoplanarPoint(_worldNormal, _worldPoint)

            raycaster.setFromCamera(pointer, camera)
            raycaster.ray.intersectPlane(_targetPlane, _intersectionPoint)

            const planeIntersection = ref.current.worldToLocal(_intersectionPoint.clone())
            _intersection2D.set(planeIntersection.x, planeIntersection.z)
            const isIn = isInsideOrClosest(_intersection2D, points)

            if (!isIn.inside) {
                planeIntersection.x = isIn.closestPoint.x
                planeIntersection.z = isIn.closestPoint.y
                _intersectionPoint.copy(ref.current.localToWorld(planeIntersection))
            }
        }
    })
}