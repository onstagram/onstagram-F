import React, { useState } from "react"

import XBtn from "../../assets/Fictogram/Etc/XBtn.png"
import GrayArrow from "../../assets/Fictogram/Etc/GrayRight.png"

function DeclarationModal() {
  const [modal, setModal] = useState()

  const toggleModal = () => {
    setModal(!modal)
  }

  const guideModal = () => {
    alert("구현중인 기능입니다. ")
    setModal(!modal)
  }

  return (
    <div>
      <span onClick={toggleModal}>신고</span>
      {modal && (
        <div className="De-Wrapper">
          <div className="De-overlay">
            <div className="De-content">
              <div className="De-content-header">
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                <span>신고</span>
                <button onClick={toggleModal}>
                  <img src={XBtn} alt="종료버튼" />
                </button>
              </div>
              <div className="De-content-Select">
                <p>신고할 문제를 선택하세요</p>
              </div>
              <div className="De-content-body">
                <div className="De-content-item" onClick={guideModal}>
                  <span>나체 이미지 또는 성적 행위</span>
                  <img src={GrayArrow} alt="오른쪽 가르키기" />
                </div>
                <div className="De-content-item" onClick={guideModal}>
                  <span>혐오 발언 또는 상징</span>
                  <img src={GrayArrow} alt="오른쪽 가르키기" />
                </div>
                <div className="De-content-item" onClick={guideModal}>
                  <span>사기 또는 거짓</span>
                  <img src={GrayArrow} alt="오른쪽 가르키기" />
                </div>
                <div className="De-content-item" onClick={guideModal}>
                  <span>폭력 또는 위험한 단체</span>
                  <img src={GrayArrow} alt="오른쪽 가르키기" />
                </div>
                <div className="De-content-item" onClick={guideModal}>
                  <span>불법 또는 규제 상품 판매</span>
                  <img src={GrayArrow} alt="오른쪽 가르키기" />
                </div>
                <div className="De-content-item" onClick={guideModal}>
                  <span>따돌림 또는 괴롭힘</span>
                  <img src={GrayArrow} alt="오른쪽 가르키기" />
                </div>
                <div className="De-content-item" onClick={guideModal}>
                  <span>다른 사람을 사칭</span>
                  <img src={GrayArrow} alt="오른쪽 가르키기" />
                </div>
                <div className="De-content-item" onClick={guideModal}>
                  <span>지식 재산권 침해</span>
                  <img src={GrayArrow} alt="오른쪽 가르키기" />
                </div>
                <div className="De-content-item" onClick={guideModal}>
                  <span>자살 또는 자해</span>
                  <img src={GrayArrow} alt="오른쪽 가르키기" />
                </div>
                <div className="De-content-item" onClick={guideModal}>
                  <span>스팸</span>
                  <img src={GrayArrow} alt="오른쪽 가르키기" />
                </div>
                <div className="De-content-item " onClick={guideModal}>
                  <span>해당 문제가 리스트에 없음</span>
                  <img src={GrayArrow} alt="오른쪽 가르키기" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DeclarationModal
