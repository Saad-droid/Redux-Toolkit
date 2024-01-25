import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export default function SkeletonList({products}) {
    return Array(products).fill(0).map((item,i)=>(

      <div>
      <Skeleton image height={30} width={200} style={{ marginBottom: 10 }} key={i}/>
     <Skeleton height={30} width={200} style={{ marginBottom: 10 }} />
     <Skeleton height={30} width={200} style={{ marginBottom: 10 }} />
   </div>

    ))
  
}
