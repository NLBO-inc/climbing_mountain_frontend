import Image from 'next/image'

const KakaoLogin = () => {
  // TODO: secret 처리
  const REST_API_KEY = 'ed13807bf40fa18ae2ceb31e732c4b97'
  const onClickKakaoLogin = async () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=http://localhost:3000/login&response_type=code`
  }

  return (
    <button onClick={onClickKakaoLogin}>
      로그인
      <Image src="/img/kakao_login_large_wide.png" alt="kakao login" width={200} height={30} />
    </button>
  )
}

export default KakaoLogin
