import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="Footer">
        <h4 className="footer__title">
          Учебный проект Яндекс.Практикум x BeatFilm.
        </h4>
        <p className="footer__copyright">
          &copy;&nbsp;2022
        </p>
        <ul className="main__list main__list_place_footer">
          <li className="main__list-item main__list-item_place_footer">
            <a className="main__social-media-link opacity-animation" href="https://practicum.yandex.ru/" rel="noreferrer" target="_blank">
              Яндекс.Практикум
            </a>
          </li>
          <li className="main__list-item main__list-item_place_footer">
            <a className="main__social-media-link opacity-animation" href="https://github.com/bxnchxfxtxms" rel="noreferrer" target="_blank">
              Github
            </a>
          </li>
          <li className="main__list-item main__list-item_place_footer">
            <a className="main__social-media-link opacity-animation" href="https://vk.com/id186116064" rel="noreferrer" target="_blank">
              VK
            </a>
          </li>
        </ul>
      </footer>
    )
  }
}

export default Footer