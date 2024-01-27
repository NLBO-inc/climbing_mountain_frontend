'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { ColorInfo } from '.'

// TODO: mapDiv 에러 해결
interface INaverMapProps {
  currentLocation: {
    lat: number
    lng: number
  }
  markers?: {
    latitude: number
    longitude: number
    level: number
  }[]
  userMarker?: {
    lat: number
    lng: number
  }
  markerImg?: {
    src: string
    width: number
    height: number
  }
  mapHeight?: string
  zoomLevel?: number
  getUserLocation?: () => void
  mapType?: string
  hasIcon?: boolean
  anchorPoint?: {
    x: number
    y: number
  }
  pinchZoom?: boolean
  userLocationMarker?: {
    src: string
    width: number
    height: number
  }
}

interface INaverMapState {
  isLoaded: boolean
  colorInfoOpened: boolean
}

declare global {
  interface Window {
    naver: any
  }
}

export const NaverMap = (props: INaverMapProps) => {
  const map = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [colorInfoOpened, setColorInfoOpened] = useState(false)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NCP_CLIENT_ID}`
    script.async = true
    script.onload = () => {
      setIsLoaded(true)
      initMap()
    }
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  const initMap = () => {
    const {
      currentLocation,
      markers,
      userMarker,
      markerImg,
      zoomLevel,
      mapType,
      anchorPoint,
      pinchZoom,
      userLocationMarker,
    } = props

    if (!currentLocation) {
      return
    }

    const center = new window.naver.maps.LatLng(
      currentLocation.lat,
      currentLocation.lng
    )

    const mapOptions = {
      mapTypeId:
        mapType === 'SATELLITE'
          ? window.naver.maps.MapTypeId.SATELLITE
          : window.naver.maps.MapTypeId.NORMAL,
      center,
      zoom: zoomLevel || 15,
      pinchZoom,
      scrollWheel: pinchZoom,
      disableDoubleClickZoom: !pinchZoom,
      disableDoubleTapZoom: !pinchZoom,
      disableTwoFingerTapZoom: !pinchZoom,
    }

    const mapInstance = new window.naver.maps.Map(map.current!, mapOptions)

    console.log(markers)
    markers?.forEach((marker) => {
      new window.naver.maps.Marker({
        position: {
          lat: marker?.latitude,
          lng: marker?.longitude,
        },
        map: mapInstance,
        icon: {
          url: `/img/markers/marker${marker?.level}.png`,
          scaledSize: new window.naver.maps.Size(
            markerImg?.width,
            markerImg?.height
          ),
          anchor: new window.naver.maps.Point(anchorPoint?.x, anchorPoint?.y),
        },
      })
    })

    if (userMarker) {
      new window.naver.maps.Marker({
        position: userMarker,
        map: mapInstance,
        icon: {
          url: userLocationMarker?.src,
          scaledSize: new window.naver.maps.Size(
            userLocationMarker?.width,
            userLocationMarker?.height
          ),
        },
      })
    }
  }

  const { mapHeight, hasIcon, getUserLocation } = props

  const NaverMapWrapper = hasIcon ? (
    <div className="naver-map" ref={map} style={{ height: mapHeight }}>
      <button
        type="button"
        // className="absolute right-16 bottom-36 h-44 w-44 flex justify-center items-center z-10"
        style={{
          backgroundColor: 'white',
          borderRadius: '50%',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
          position: 'absolute',
          right: '16px',
          bottom: '36px',
          height: '44px',
          width: '44px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10,
          border: 'none',
        }}
        onClick={() => getUserLocation && getUserLocation()}
      >
        <Image
          src="/img/icons/location.png"
          alt="location"
          width={24}
          height={24}
        />
      </button>
      {colorInfoOpened && <ColorInfo />}
      <button
        style={{
          background: 'white',
          borderRadius: '44px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
          position: 'absolute',
          left: '16px',
          bottom: '36px',
          height: '44px',
          width: 'fit-content',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10,
          padding: '13px 16px',
          border: 'none',
        }}
        onClick={() => setColorInfoOpened(!colorInfoOpened)}
      >
        색 정보는 무엇인가요?
        <Image
          src={`/img/icons/${
            colorInfoOpened ? 'delete_fill' : 'icon-question-circle-mono'
          }.png`}
          alt="question"
          width={18}
          height={18}
          style={{
            paddingLeft: '6px',
          }}
        />
      </button>
    </div>
  ) : (
    <div className="naver-map" ref={map} style={{ height: mapHeight }} />
  )

  return isLoaded ? NaverMapWrapper : <div>loading...</div>
}
