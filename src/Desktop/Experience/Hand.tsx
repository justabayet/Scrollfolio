import { useFrame } from "@react-three/fiber"
import { useLayoutEffect, useState } from "react"
import { Bone, Group, MathUtils } from "three"
import { useScrollData } from "../provider/ScrollProvider"
import { _intersectionPoint } from "./updateIntersection"
import { usePhaseData } from "../provider/PhaseProvider"

interface HandProps {
    scene: Group
}

const THUMB_TIP_BONE_NAME = 'DEF-thumb03R'
// const THUMB_TIP_BONE_NAME_INDEX = 'DEF-f_index03R'
// const THUMB_TIP_BONE_NAME_INDEX = 'DEF-f_middle03R'
const THUMB_TIP_BONE_NAME_INDEX = 'DEF-f_ring03R'

export default function Hand({ scene }: HandProps) {
    const [thumbTip, setThumbTip] = useState<Bone | null>(null)
    const [idnexTip, setIndexTip] = useState<Bone | null>(null)
    const { phase } = usePhaseData()

    useLayoutEffect(() => {
        const tip = scene.getObjectByName(THUMB_TIP_BONE_NAME) as Bone
        setThumbTip(tip)
        const tipIndex = scene.getObjectByName(THUMB_TIP_BONE_NAME_INDEX) as Bone
        setIndexTip(tipIndex)
    }, [scene])

    const { scrollState } = useScrollData()

    useFrame(() => {
        if (phase != 'Showing') return

        const tip = thumbTip
        if (!tip || !_intersectionPoint || !idnexTip) return

        const targetPos = tip.parent!.worldToLocal(_intersectionPoint.clone())
        tip.position.lerp(targetPos, 0.5)


        const targetRotationY = scrollState.current.isDragging ? 1.8 : 1
        tip.rotation.x = MathUtils.lerp(tip.rotation.x, targetRotationY, 0.5)


        // const targetPos2 = idnexTip.parent!.worldToLocal(_intersectionPoint.clone())
        // idnexTip.position.lerp(targetPos2, 0.5)
        // idnexTip.rotation.x = MathUtils.lerp(idnexTip.rotation.x, targetRotationY, 0.5)
    })

    return (
        <primitive object={scene} scale={15} />
    )
}