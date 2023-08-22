import {Skeleton, SkeletonText,CardBody } from '@chakra-ui/react'
import { Card } from '@chakra-ui/react'
import React from 'react'

const GameCardSkeleton = () => {
  return (
    <Card>
        <Skeleton height= '200px'/>
        <CardBody>
            <SkeletonText/>
        </CardBody>
    </Card>
  )
}

export default GameCardSkeleton