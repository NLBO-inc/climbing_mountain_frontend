export const getMountains = async () => {
  const data = await fetch('http://localhost:8080/mountains').then((res) =>
    res.json()
  )
  return data
}

