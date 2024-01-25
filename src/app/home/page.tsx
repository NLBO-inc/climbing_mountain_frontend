'use client'

import { getMountains } from '@/apis'
import { NaverMap } from '@/components'
import { useQuery } from '@tanstack/react-query'

const Home = () => {
  const { data } = useQuery({
    queryKey: ['mountainsQuery'],
    queryFn: getMountains,
  })

  interface IMountainLocation {
    latitude: string
    longitude: string
  }

  // TODO: currentLocation 현재 위치 받도록 수정
  return (
    <section>
      {data ? (
        <NaverMap
          currentLocation={{ lat: 37.543574174, lng: 127.044727503 }}
          markers={data}
          zoomLevel={10}
          mapHeight="100vh"
          mapType="terrain"
          hasIcon={true}
          anchorPoint={{ x: 0.5, y: 1 }}
          pinchZoom={true}
          markerImg={{ src: '/img/markers/marker1.png', width: 40, height: 47 }}
        />
      ) : (
        <div>Loading...</div>
      )}
    </section>
  )
}

export default Home
