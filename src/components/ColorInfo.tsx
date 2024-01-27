export const ColorInfo = () => {
  // TODO: 마지막 li 여백 맞추기
  const ColorElement = ({
    color,
    level,
    height,
  }: {
    color: string
    level: string
    height: string
  }) => {
    return (
      <li
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '14px',
        }}
      >
        <div
          style={{
            display: 'flex',
          }}
        >
          <div
            style={{
              backgroundColor: color,
              width: '18px',
              height: '18px',
              borderRadius: '6px',
              marginRight: '8px',
            }}
          />
          <span>{level}</span>
        </div>
        <div>{height}</div>
      </li>
    )
  }
  return (
    <section
      style={{
        left: '16px',
        backgroundColor: 'white',
        height: 'fix-content',
        width: '226px',
        borderRadius: '16px',
        padding: '20px 16px',
        border: '1px solid #E5E5E5',
        position: 'absolute',
        zIndex: 10,
        bottom: '86px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
      }}
    >
      <h1 style={{ margin: 0 }}>색 정보</h1>
      <ul
        style={{
          padding: 0,
        }}
      >
        <ColorElement color="#BCA485" level="하" height="0 ~ 100M" />
        <ColorElement color="#2BA98B" level="중" height="100 ~ 300M" />
        <ColorElement color="#288FBB" level="상" height="300 ~ 500M" />
        <ColorElement color="#CF6848" level="최상" height="500M 이상" />
      </ul>
    </section>
  )
}
