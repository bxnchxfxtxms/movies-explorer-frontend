import React from 'react'

class InfoTooltip extends React.Component {

  render() {
    return(
      <section className={`info-tooltip ${this.props.isOpen && 'info-tooltip_opened'}`}>
        <div className="info-tooltip__container">
          <button className="info-tooltip__close-button" type="button" onClick={this.props.onClose}></button>
          <span className="info-tooltip__register-confirm-message">
            Данные профиля успешно обновлены!
          </span>
        </div>
      </section>
    )
  }
}

export default InfoTooltip