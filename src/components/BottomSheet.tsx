import Image from 'next/image'

export const BottomSheet = ({
  setBottomSheetOpened,
}: {
  setBottomSheetOpened: VoidFunction
}) => {
  return (
    <>
      <button
        type="button"
        // className="absolute right-16 bottom-36 h-44 w-44 flex justify-center items-center z-10"
        style={{
          backgroundColor: 'white',
          borderRadius: '50%',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
          position: 'absolute',
          left: '10px',
          top: '20px',
          height: '44px',
          width: '44px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10,
          border: 'none',
        }}
        onClick={setBottomSheetOpened}
      ></button>
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          padding: '20px 20px 30px',
          height: 'fit-content',
          width: 'calc(100% - 40px)',
          backgroundColor: 'white',
          zIndex: 20,
          borderRadius: '24px 24px 0px 0px',
          background: '#FFFFFF',
          boxShadow: '0px -2px 40px 0px rgba(0, 0, 0, 0.10)',
        }}
      >
        <section>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span
                style={{
                  color: '#006f85',
                  fontSize: '12px',
                  fontWeight: 500,
                  marginBottom: '10px',
                }}
              >
                <Image
                  src="/img/icons/frame.png"
                  alt="frame"
                  width={16}
                  height={16}
                />
                서울 종로구 무악동
              </span>
              <span
                style={{
                  color: '#121619',
                  fontSize: '20px',
                  fontWeight: 700,
                }}
              >
                북한산
              </span>
            </div>
            <Image
              src="/img/image1.png"
              alt="location"
              width={105}
              height={70}
              style={{
                borderRadius: '10px',
              }}
            />
          </div>
          <div
            style={{
              display: 'flex',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginRight: '30px',
              }}
            >
              <span
                style={{
                  color: '#4D5358',
                  fontSize: '12px',
                  fontWeight: 500,
                  marginBottom: '6px',
                }}
              >
                높이
              </span>
              <span
                style={{
                  color: '#121619',
                  fontSize: '16px',
                  fontWeight: 600,
                }}
              >
                450M
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span
                style={{
                  color: '#4D5358',
                  fontSize: '12px',
                  fontWeight: 500,
                  marginBottom: '6px',
                }}
              >
                난이도
              </span>
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: '#121619',
                  fontSize: '16px',
                  fontWeight: 600,
                }}
              >
                중
                <Image
                  src="/img/icons/icon-question-circle-mono.png"
                  alt="medium"
                  width={16}
                  height={16}
                  style={{
                    marginLeft: '8px',
                  }}
                />
              </span>
            </div>
          </div>
          <p
            style={{
              padding: '16px',
              backgroundColor: '#f4f6f9',
              borderRadius: '12px',
              fontSize: '13px',
              fontWeight: 400,
              color: '#4d5358',
            }}
          >
            국립공원에 속하는 등산과 암벽 등반 인기 명소인 산으로, 화강암 봉우리
            3개가 있습니다.
          </p>
          <p
            style={{
              color: '#a2a9b0',
              fontSize: '10px',
              fontWeight: 500,
              textAlign: 'center',
              width: '100%',
            }}
          >
            Copyright 2018. UploadWizard All rights reserved.
          </p>
          <button
            style={{
              display: 'block',
              borderRadius: '50px',
              backgroundColor: '#121619',
              padding: '17px',
              border: 'none',
              width: '100%',
              marginTop: '16px',
              color: 'white',
              fontSize: '16px',
              fontWeight: 600,
            }}
          >
            산 상세보기
          </button>
        </section>
      </div>
    </>
  )
}
