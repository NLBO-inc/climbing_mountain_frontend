import Image from 'next/image'

const LocationButton = () => {
  return (
    <button className="absolute">
      <Image src="/img/location.png" alt="location" width={24} height={24} />
    </button>
  )
}

export default LocationButton
