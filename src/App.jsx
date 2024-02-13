import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
<>
  <div className="header">
    <div className="header_logo">
      <a href="https://chainback-org.vercel.app/">
        <img
          className="header_logo__img"
          src="https://chainback.org/staking/static/media/logo.b3e71e45.png"
          alt="Logo"
        />
      </a>
    </div>
    <div className="header_connect">
      <div className="btn_connect">Connect Wallet</div>
    </div>
  </div>
  <div className="staking__pool">
    <div className="staking">
      <div className="staking__header">
        <div className="staking__brand">
          <span className="staking__brand__text">Staking Pool #1</span>
        </div>
        <div className="staking__block">
          <div className="progress-bar">
            <div className="progress-bar__container" style={{ width: "100%" }}>
              <div className="progress-bar__text">30 000 000 / 30 000 000</div>
            </div>
          </div>
        </div>
        <div className="staking__block">
          <span className="staking__percent">0%</span>
          <div className="staking__note">
            <span className="staking__name">APY</span>
            <div className="staking__info">
              <img
                className="staking__icon svg"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAABg1BMVEUAAAAAAACAgIBVVapAQIBmZplVVYBdXYtVVYBiYolbW4BVZohgYIBaWodVY4BeXoZZWYBdXYBVYIBcXIVdXYNaYoBXX4NcXIBXXoBZX4JaYIBYXoJXXIBYXYBXYIJZXoJbX4JZXYJZXIBYXoFaXYBZX4FYXoBaXYFZX4BYXoFaXYBYXYFaX4BZXoFYXoBaXYFYXYFaX4BaXoFYX4FZXoBYX4BYX4BaXoFZXYBYXoFaXoBZX4BYXoBZXYBZXoBaXoBZXoBaXYBZX4BYXYBZXoBYX4BZXYBZXoBZXYBaXoBZXoBZX4BYXoBZXoBYXoBZXoBZXoBaXoBZXoBZXoBZXoBZX4BYXoBZXoBZXoBYXYBZXoBZXoBaX4BZXoBZXoBZXoBZXoBZXoBZXoBZXoBZX4BZXoBZXoBZXoBZXYBYXoBZXoBZXoBZXoBZX4BZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoD////7/zVuAAAAf3RSTlMAAQIDBAUGCwwNDg8QERITFBYYGSEiIyQmKzAxMjQ1OTs/UFFSU1RVVldYXV5fYmNlZm9xcnR8fX5/gIGCiYqLjY6PmZ2foaOkpaanra6ztLW5u73BwsTFycrLzM3Oz9DR0tPU1dbY2d3e4Obn6Onq6+zt7u/w8fL3+Pn6/P3+oILaZQAAAAFiS0dEgGW9nmgAAAJtSURBVFjDpZftQ9JQFMYfLApDC0qsNC0D6U3tTRAtBVqm0DuhJRjV0nJWZkzNEHb/9T4Mp4N77u7Y8/U557fd7dx7zwEIhePTz1c1/eBA11bzqdEwXGk4qxrMJkPNDMlmn0msM67WEt0S6Wcf6YyUPtPrkO4b+82Eqj7oEuVffM8ctdxP50d3mIT+3ibSu54wSWW4yziVZ9LK+Tn5b5gLvW4j+J4xV8q3roJYv1b8ThDS9vxb3KDPVwFcLvIJcdv/3+OFqGbl+t9xAbuRYx+AXz8jh/gG117yWYC73ICfVkCJv4hxa/9sc/2y9YCXfMBWT9N/zPd/WIAPxJ9INfc/tX+vNfP76tTWNL9ygiqWymkAwIm3ZDlNAgDWSb98BcClAl2PKgAMiyr2W+GLIfIHAWSZB6UBfPUCqABh8hVfjN8wNUEDGiHEKS9rlUFI8AoxTFPWeSnAFKiDzAhIARZRpqwxKcAKNsnT+945CYCGqsC94AzYRs0b4J93gOclbHoDaPRvlAOsIO8NsECXshwgiVFvgKhgO8sAGiFA9QL4KD7SnAFzAIa8AAYA0RocAWvii8UZYF4s3XqngObVhhmeWVcUJWj6AUVR6vwD0VQvr73dt/dA+5yQX8FDd6IzwJ2jFme5E0DxqMVB/657wE7kuB93D4jZAzJt26RgU1ujNtva6s67u5ZzbQ2731Wz/YrTrp98Kp+/4OfOS2nJdGPWR8ws13WZ/L2b9NAUWXLOL/aJx74th7Hvvs9hcuxJCS67P1NBidk1MEk0burDgOz4PJj+1FJ6jcrcgLsBPhRL5kob1VqtulFaTEZDVNx/QAmNoJi51o4AAAAASUVORK5CYII="
                alt="Info"
              />
              <span className="staking__tooltip">
                Staked Amount / Total Staked Amount * 100
              </span>
            </div>
          </div>
        </div>
        <div className="staking__block">
          <span className="staking__percent">0 ETH</span>
          <div className="staking__note">
            <span className="staking__name">5 minute rewards</span>
          </div>
        </div>
        <div className="staking__block">
          <span className="staking__value">0</span>
          <div className="staking__note">
            <span className="staking__name">Deposited</span>
          </div>
        </div>
      </div>
      <div className="staking-box">
        <div className="staking__content">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4 gy-lg-0">
            <div>
              <div className="staking__label">
                <span className="staking__label__name">Available Balance:</span>
                <span className="staking__label__value">0</span>
              </div>
              <div className="staking__field-box">
                <input
                  className="input"
                  type="number"
                  placeholder={0.0}
                  defaultValue=""
                />
                <div className="staking__buttons">
                  <button className="btn staking__buttons__max btn_info">
                    Max
                  </button>
                  <button
                    className="btn btn_primary btn_small"
                    type="button"
                    disabled=""
                  >
                    Stake
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="staking__label">
                <span className="staking__label__name">Locked Balance:</span>
                <span className="staking__label__value">0</span>
              </div>
              <div className="staking__field-box">
                <input
                  className="input"
                  type="number"
                  placeholder={0.0}
                  defaultValue={0}
                />
                <div className="staking__buttons">
                  <button
                    className="btn staking__buttons__max btn_info"
                    disabled=""
                  >
                    Max
                  </button>
                  <button
                    className="btn btn_primary btn_small"
                    type="button"
                    disabled=""
                  >
                    Withdraw
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="staking__label">
                <span className="staking__label__name">
                  <span className="timer">Rewards (Next rewards in --:--)</span>
                </span>
              </div>
              <div className="staking__total-box">
                <div className="staking__total">
                  <span className="staking__total__value">0 ETH</span>
                </div>
                <button
                  className="btn btn_primary btn_small"
                  type="button"
                  disabled=""
                >
                  Claim
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="staking">
      <div className="staking__header">
        <div className="staking__brand">
          <span className="staking__brand__text">Staking Pool #2</span>
        </div>
        <div className="staking__block">
          <div className="progress-bar">
            <div
              className="progress-bar__container"
              style={{ width: "55.3715%" }}
            >
              <div className="progress-bar__text">16 611 465 / 30 000 000</div>
            </div>
          </div>
        </div>
        <div className="staking__block">
          <span className="staking__percent">44.6284%</span>
          <div className="staking__note">
            <span className="staking__name">APY</span>
            <div className="staking__info">
              <img
                className="staking__icon svg"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAABg1BMVEUAAAAAAACAgIBVVapAQIBmZplVVYBdXYtVVYBiYolbW4BVZohgYIBaWodVY4BeXoZZWYBdXYBVYIBcXIVdXYNaYoBXX4NcXIBXXoBZX4JaYIBYXoJXXIBYXYBXYIJZXoJbX4JZXYJZXIBYXoFaXYBZX4FYXoBaXYFZX4BYXoFaXYBYXYFaX4BZXoFYXoBaXYFYXYFaX4BaXoFYX4FZXoBYX4BYX4BaXoFZXYBYXoFaXoBZX4BYXoBZXYBZXoBaXoBZXoBaXYBZX4BYXYBZXoBYX4BZXYBZXoBZXYBaXoBZXoBZX4BYXoBZXoBYXoBZXoBZXoBaXoBZXoBZXoBZXoBZX4BYXoBZXoBZXoBYXYBZXoBZXoBaX4BZXoBZXoBZXoBZXoBZXoBZXoBZXoBZX4BZXoBZXoBZXoBZXYBYXoBZXoBZXoBZXoBZX4BZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoD////7/zVuAAAAf3RSTlMAAQIDBAUGCwwNDg8QERITFBYYGSEiIyQmKzAxMjQ1OTs/UFFSU1RVVldYXV5fYmNlZm9xcnR8fX5/gIGCiYqLjY6PmZ2foaOkpaanra6ztLW5u73BwsTFycrLzM3Oz9DR0tPU1dbY2d3e4Obn6Onq6+zt7u/w8fL3+Pn6/P3+oILaZQAAAAFiS0dEgGW9nmgAAAJtSURBVFjDpZftQ9JQFMYfLApDC0qsNC0D6U3tTRAtBVqm0DuhJRjV0nJWZkzNEHb/9T4Mp4N77u7Y8/U557fd7dx7zwEIhePTz1c1/eBA11bzqdEwXGk4qxrMJkPNDMlmn0msM67WEt0S6Wcf6YyUPtPrkO4b+82Eqj7oEuVffM8ctdxP50d3mIT+3ibSu54wSWW4yziVZ9LK+Tn5b5gLvW4j+J4xV8q3roJYv1b8ThDS9vxb3KDPVwFcLvIJcdv/3+OFqGbl+t9xAbuRYx+AXz8jh/gG117yWYC73ICfVkCJv4hxa/9sc/2y9YCXfMBWT9N/zPd/WIAPxJ9INfc/tX+vNfP76tTWNL9ygiqWymkAwIm3ZDlNAgDWSb98BcClAl2PKgAMiyr2W+GLIfIHAWSZB6UBfPUCqABh8hVfjN8wNUEDGiHEKS9rlUFI8AoxTFPWeSnAFKiDzAhIARZRpqwxKcAKNsnT+945CYCGqsC94AzYRs0b4J93gOclbHoDaPRvlAOsIO8NsECXshwgiVFvgKhgO8sAGiFA9QL4KD7SnAFzAIa8AAYA0RocAWvii8UZYF4s3XqngObVhhmeWVcUJWj6AUVR6vwD0VQvr73dt/dA+5yQX8FDd6IzwJ2jFme5E0DxqMVB/657wE7kuB93D4jZAzJt26RgU1ujNtva6s67u5ZzbQ2731Wz/YrTrp98Kp+/4OfOS2nJdGPWR8ws13WZ/L2b9NAUWXLOL/aJx74th7Hvvs9hcuxJCS67P1NBidk1MEk0burDgOz4PJj+1FJ6jcrcgLsBPhRL5kob1VqtulFaTEZDVNx/QAmNoJi51o4AAAAASUVORK5CYII="
                alt="Info"
              />
              <span className="staking__tooltip">
                Staked Amount / Total Staked Amount * 100
              </span>
            </div>
          </div>
        </div>
        <div className="staking__block">
          <span className="staking__percent">0.000000355481083 ETH</span>
          <div className="staking__note">
            <span className="staking__name">5 minute rewards</span>
          </div>
        </div>
        <div className="staking__block">
          <span className="staking__value">0</span>
          <div className="staking__note">
            <span className="staking__name">Deposited</span>
          </div>
        </div>
      </div>
      <div className="staking-box">
        <div className="staking__content">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4 gy-lg-0">
            <div>
              <div className="staking__label">
                <span className="staking__label__name">Available Balance:</span>
                <span className="staking__label__value">0</span>
              </div>
              <div className="staking__field-box">
                <input
                  className="input"
                  type="number"
                  placeholder={0.0}
                  defaultValue={13388535}
                />
                <div className="staking__buttons">
                  <button className="btn staking__buttons__max btn_info">
                    Max
                  </button>
                  <button
                    className="btn btn_primary btn_small"
                    type="button"
                    disabled=""
                  >
                    Stake
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="staking__label">
                <span className="staking__label__name">Locked Balance:</span>
                <span className="staking__label__value">0</span>
              </div>
              <div className="staking__field-box">
                <input
                  className="input"
                  type="number"
                  placeholder={0.0}
                  defaultValue=""
                />
                <div className="staking__buttons">
                  <button
                    className="btn staking__buttons__max btn_info"
                    disabled=""
                  >
                    Max
                  </button>
                  <button
                    className="btn btn_primary btn_small"
                    type="button"
                    disabled=""
                  >
                    Withdraw
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="staking__label">
                <span className="staking__label__name">
                  <span className="timer">Rewards (Next rewards in --:--)</span>
                </span>
              </div>
              <div className="staking__total-box">
                <div className="staking__total">
                  <span className="staking__total__value">0 ETH</span>
                </div>
                <button
                  className="btn btn_primary btn_small"
                  type="button"
                  disabled=""
                >
                  Claim
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="staking">
      <div className="staking__header">
        <div className="staking__brand">
          <span className="staking__brand__text">Staking Pool #3</span>
        </div>
        <div className="staking__block">
          <div className="progress-bar">
            <div
              className="progress-bar__container"
              style={{ width: "17.1539%" }}
            >
              <div className="progress-bar__text">5 146 156 / 30 000 000</div>
            </div>
          </div>
        </div>
        <div className="staking__block">
          <span className="staking__percent">82.8461%</span>
          <div className="staking__note">
            <span className="staking__name">APY</span>
            <div className="staking__info">
              <img
                className="staking__icon svg"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAABg1BMVEUAAAAAAACAgIBVVapAQIBmZplVVYBdXYtVVYBiYolbW4BVZohgYIBaWodVY4BeXoZZWYBdXYBVYIBcXIVdXYNaYoBXX4NcXIBXXoBZX4JaYIBYXoJXXIBYXYBXYIJZXoJbX4JZXYJZXIBYXoFaXYBZX4FYXoBaXYFZX4BYXoFaXYBYXYFaX4BZXoFYXoBaXYFYXYFaX4BaXoFYX4FZXoBYX4BYX4BaXoFZXYBYXoFaXoBZX4BYXoBZXYBZXoBaXoBZXoBaXYBZX4BYXYBZXoBYX4BZXYBZXoBZXYBaXoBZXoBZX4BYXoBZXoBYXoBZXoBZXoBaXoBZXoBZXoBZXoBZX4BYXoBZXoBZXoBYXYBZXoBZXoBaX4BZXoBZXoBZXoBZXoBZXoBZXoBZXoBZX4BZXoBZXoBZXoBZXYBYXoBZXoBZXoBZXoBZX4BZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoD////7/zVuAAAAf3RSTlMAAQIDBAUGCwwNDg8QERITFBYYGSEiIyQmKzAxMjQ1OTs/UFFSU1RVVldYXV5fYmNlZm9xcnR8fX5/gIGCiYqLjY6PmZ2foaOkpaanra6ztLW5u73BwsTFycrLzM3Oz9DR0tPU1dbY2d3e4Obn6Onq6+zt7u/w8fL3+Pn6/P3+oILaZQAAAAFiS0dEgGW9nmgAAAJtSURBVFjDpZftQ9JQFMYfLApDC0qsNC0D6U3tTRAtBVqm0DuhJRjV0nJWZkzNEHb/9T4Mp4N77u7Y8/U557fd7dx7zwEIhePTz1c1/eBA11bzqdEwXGk4qxrMJkPNDMlmn0msM67WEt0S6Wcf6YyUPtPrkO4b+82Eqj7oEuVffM8ctdxP50d3mIT+3ibSu54wSWW4yziVZ9LK+Tn5b5gLvW4j+J4xV8q3roJYv1b8ThDS9vxb3KDPVwFcLvIJcdv/3+OFqGbl+t9xAbuRYx+AXz8jh/gG117yWYC73ICfVkCJv4hxa/9sc/2y9YCXfMBWT9N/zPd/WIAPxJ9INfc/tX+vNfP76tTWNL9ygiqWymkAwIm3ZDlNAgDWSb98BcClAl2PKgAMiyr2W+GLIfIHAWSZB6UBfPUCqABh8hVfjN8wNUEDGiHEKS9rlUFI8AoxTFPWeSnAFKiDzAhIARZRpqwxKcAKNsnT+945CYCGqsC94AzYRs0b4J93gOclbHoDaPRvlAOsIO8NsECXshwgiVFvgKhgO8sAGiFA9QL4KD7SnAFzAIa8AAYA0RocAWvii8UZYF4s3XqngObVhhmeWVcUJWj6AUVR6vwD0VQvr73dt/dA+5yQX8FDd6IzwJ2jFme5E0DxqMVB/657wE7kuB93D4jZAzJt26RgU1ujNtva6s67u5ZzbQ2731Wz/YrTrp98Kp+/4OfOS2nJdGPWR8ws13WZ/L2b9NAUWXLOL/aJx74th7Hvvs9hcuxJCS67P1NBidk1MEk0burDgOz4PJj+1FJ6jcrcgLsBPhRL5kob1VqtulFaTEZDVNx/QAmNoJi51o4AAAAASUVORK5CYII="
                alt="Info"
              />
              <span className="staking__tooltip">
                Staked Amount / Total Staked Amount * 100
              </span>
            </div>
          </div>
        </div>
        <div className="staking__block">
          <span className="staking__percent">0.000000937974018 ETH</span>
          <div className="staking__note">
            <span className="staking__name">5 minute rewards</span>
          </div>
        </div>
        <div className="staking__block">
          <span className="staking__value">0</span>
          <div className="staking__note">
            <span className="staking__name">Deposited</span>
          </div>
        </div>
      </div>
      <div className="staking-box">
        <div className="staking__content">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4 gy-lg-0">
            <div>
              <div className="staking__label">
                <span className="staking__label__name">Available Balance:</span>
                <span className="staking__label__value">0</span>
              </div>
              <div className="staking__field-box">
                <input
                  className="input"
                  type="number"
                  placeholder={0.0}
                  defaultValue={24853844}
                />
                <div className="staking__buttons">
                  <button className="btn staking__buttons__max btn_info">
                    Max
                  </button>
                  <button
                    className="btn btn_primary btn_small"
                    type="button"
                    disabled=""
                  >
                    Stake
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="staking__label">
                <span className="staking__label__name">Locked Balance:</span>
                <span className="staking__label__value">0</span>
              </div>
              <div className="staking__field-box">
                <input
                  className="input"
                  type="number"
                  placeholder={0.0}
                  defaultValue=""
                />
                <div className="staking__buttons">
                  <button
                    className="btn staking__buttons__max btn_info"
                    disabled=""
                  >
                    Max
                  </button>
                  <button
                    className="btn btn_primary btn_small"
                    type="button"
                    disabled=""
                  >
                    Withdraw
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="staking__label">
                <span className="staking__label__name">
                  <span className="timer">Rewards (Next rewards in --:--)</span>
                </span>
              </div>
              <div className="staking__total-box">
                <div className="staking__total">
                  <span className="staking__total__value">0 ETH</span>
                </div>
                <button
                  className="btn btn_primary btn_small"
                  type="button"
                  disabled=""
                >
                  Claim
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="staking">
      <div className="staking__header">
        <div className="staking__brand">
          <span className="staking__brand__text">Staking Pool #4</span>
        </div>
        <div className="staking__block">
          <div className="progress-bar">
            <div
              className="progress-bar__container"
              style={{ width: "49.2631%" }}
            >
              <div className="progress-bar__text">14 778 942 / 30 000 000</div>
            </div>
          </div>
        </div>
        <div className="staking__block">
          <span className="staking__percent">50.7368%</span>
          <div className="staking__note">
            <span className="staking__name">APY</span>
            <div className="staking__info">
              <img
                className="staking__icon svg"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAABg1BMVEUAAAAAAACAgIBVVapAQIBmZplVVYBdXYtVVYBiYolbW4BVZohgYIBaWodVY4BeXoZZWYBdXYBVYIBcXIVdXYNaYoBXX4NcXIBXXoBZX4JaYIBYXoJXXIBYXYBXYIJZXoJbX4JZXYJZXIBYXoFaXYBZX4FYXoBaXYFZX4BYXoFaXYBYXYFaX4BZXoFYXoBaXYFYXYFaX4BaXoFYX4FZXoBYX4BYX4BaXoFZXYBYXoFaXoBZX4BYXoBZXYBZXoBaXoBZXoBaXYBZX4BYXYBZXoBYX4BZXYBZXoBZXYBaXoBZXoBZX4BYXoBZXoBYXoBZXoBZXoBaXoBZXoBZXoBZXoBZX4BYXoBZXoBZXoBYXYBZXoBZXoBaX4BZXoBZXoBZXoBZXoBZXoBZXoBZXoBZX4BZXoBZXoBZXoBZXYBYXoBZXoBZXoBZXoBZX4BZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoD////7/zVuAAAAf3RSTlMAAQIDBAUGCwwNDg8QERITFBYYGSEiIyQmKzAxMjQ1OTs/UFFSU1RVVldYXV5fYmNlZm9xcnR8fX5/gIGCiYqLjY6PmZ2foaOkpaanra6ztLW5u73BwsTFycrLzM3Oz9DR0tPU1dbY2d3e4Obn6Onq6+zt7u/w8fL3+Pn6/P3+oILaZQAAAAFiS0dEgGW9nmgAAAJtSURBVFjDpZftQ9JQFMYfLApDC0qsNC0D6U3tTRAtBVqm0DuhJRjV0nJWZkzNEHb/9T4Mp4N77u7Y8/U557fd7dx7zwEIhePTz1c1/eBA11bzqdEwXGk4qxrMJkPNDMlmn0msM67WEt0S6Wcf6YyUPtPrkO4b+82Eqj7oEuVffM8ctdxP50d3mIT+3ibSu54wSWW4yziVZ9LK+Tn5b5gLvW4j+J4xV8q3roJYv1b8ThDS9vxb3KDPVwFcLvIJcdv/3+OFqGbl+t9xAbuRYx+AXz8jh/gG117yWYC73ICfVkCJv4hxa/9sc/2y9YCXfMBWT9N/zPd/WIAPxJ9INfc/tX+vNfP76tTWNL9ygiqWymkAwIm3ZDlNAgDWSb98BcClAl2PKgAMiyr2W+GLIfIHAWSZB6UBfPUCqABh8hVfjN8wNUEDGiHEKS9rlUFI8AoxTFPWeSnAFKiDzAhIARZRpqwxKcAKNsnT+945CYCGqsC94AzYRs0b4J93gOclbHoDaPRvlAOsIO8NsECXshwgiVFvgKhgO8sAGiFA9QL4KD7SnAFzAIa8AAYA0RocAWvii8UZYF4s3XqngObVhhmeWVcUJWj6AUVR6vwD0VQvr73dt/dA+5yQX8FDd6IzwJ2jFme5E0DxqMVB/657wE7kuB93D4jZAzJt26RgU1ujNtva6s67u5ZzbQ2731Wz/YrTrp98Kp+/4OfOS2nJdGPWR8ws13WZ/L2b9NAUWXLOL/aJx74th7Hvvs9hcuxJCS67P1NBidk1MEk0burDgOz4PJj+1FJ6jcrcgLsBPhRL5kob1VqtulFaTEZDVNx/QAmNoJi51o4AAAAASUVORK5CYII="
                alt="Info"
              />
              <span className="staking__tooltip">
                Staked Amount / Total Staked Amount * 100
              </span>
            </div>
          </div>
        </div>
        <div className="staking__block">
          <span className="staking__percent">0.000000675578240 ETH</span>
          <div className="staking__note">
            <span className="staking__name">5 minute rewards</span>
          </div>
        </div>
        <div className="staking__block">
          <span className="staking__value">0</span>
          <div className="staking__note">
            <span className="staking__name">Deposited</span>
          </div>
        </div>
      </div>
      <div className="staking-box">
        <div className="staking__content">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4 gy-lg-0">
            <div>
              <div className="staking__label">
                <span className="staking__label__name">Available Balance:</span>
                <span className="staking__label__value">0</span>
              </div>
              <div className="staking__field-box">
                <input
                  className="input"
                  type="number"
                  placeholder={0.0}
                  defaultValue={15221058}
                />
                <div className="staking__buttons">
                  <button className="btn staking__buttons__max btn_info">
                    Max
                  </button>
                  <button
                    className="btn btn_primary btn_small"
                    type="button"
                    disabled=""
                  >
                    Stake
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="staking__label">
                <span className="staking__label__name">Locked Balance:</span>
                <span className="staking__label__value">0</span>
              </div>
              <div className="staking__field-box">
                <input
                  className="input"
                  type="number"
                  placeholder={0.0}
                  defaultValue=""
                />
                <div className="staking__buttons">
                  <button
                    className="btn staking__buttons__max btn_info"
                    disabled=""
                  >
                    Max
                  </button>
                  <button
                    className="btn btn_primary btn_small"
                    type="button"
                    disabled=""
                  >
                    Withdraw
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="staking__label">
                <span className="staking__label__name">
                  <span className="timer">Rewards (Next rewards in --:--)</span>
                </span>
              </div>
              <div className="staking__total-box">
                <div className="staking__total">
                  <span className="staking__total__value">0 ETH</span>
                </div>
                <button
                  className="btn btn_primary btn_small"
                  type="button"
                  disabled=""
                >
                  Claim
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="staking">
      <div className="staking__header">
        <div className="staking__brand">
          <span className="staking__brand__text">Staking Pool #5</span>
        </div>
        <div className="staking__block">
          <div className="progress-bar">
            <div
              className="progress-bar__container"
              style={{ width: "74.9156%" }}
            >
              <div className="progress-bar__text">22 474 687 / 30 000 000</div>
            </div>
          </div>
        </div>
        <div className="staking__block">
          <span className="staking__percent">25.0843%</span>
          <div className="staking__note">
            <span className="staking__name">APY</span>
            <div className="staking__info">
              <img
                className="staking__icon svg"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAABg1BMVEUAAAAAAACAgIBVVapAQIBmZplVVYBdXYtVVYBiYolbW4BVZohgYIBaWodVY4BeXoZZWYBdXYBVYIBcXIVdXYNaYoBXX4NcXIBXXoBZX4JaYIBYXoJXXIBYXYBXYIJZXoJbX4JZXYJZXIBYXoFaXYBZX4FYXoBaXYFZX4BYXoFaXYBYXYFaX4BZXoFYXoBaXYFYXYFaX4BaXoFYX4FZXoBYX4BYX4BaXoFZXYBYXoFaXoBZX4BYXoBZXYBZXoBaXoBZXoBaXYBZX4BYXYBZXoBYX4BZXYBZXoBZXYBaXoBZXoBZX4BYXoBZXoBYXoBZXoBZXoBaXoBZXoBZXoBZXoBZX4BYXoBZXoBZXoBYXYBZXoBZXoBaX4BZXoBZXoBZXoBZXoBZXoBZXoBZXoBZX4BZXoBZXoBZXoBZXYBYXoBZXoBZXoBZXoBZX4BZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoD////7/zVuAAAAf3RSTlMAAQIDBAUGCwwNDg8QERITFBYYGSEiIyQmKzAxMjQ1OTs/UFFSU1RVVldYXV5fYmNlZm9xcnR8fX5/gIGCiYqLjY6PmZ2foaOkpaanra6ztLW5u73BwsTFycrLzM3Oz9DR0tPU1dbY2d3e4Obn6Onq6+zt7u/w8fL3+Pn6/P3+oILaZQAAAAFiS0dEgGW9nmgAAAJtSURBVFjDpZftQ9JQFMYfLApDC0qsNC0D6U3tTRAtBVqm0DuhJRjV0nJWZkzNEHb/9T4Mp4N77u7Y8/U557fd7dx7zwEIhePTz1c1/eBA11bzqdEwXGk4qxrMJkPNDMlmn0msM67WEt0S6Wcf6YyUPtPrkO4b+82Eqj7oEuVffM8ctdxP50d3mIT+3ibSu54wSWW4yziVZ9LK+Tn5b5gLvW4j+J4xV8q3roJYv1b8ThDS9vxb3KDPVwFcLvIJcdv/3+OFqGbl+t9xAbuRYx+AXz8jh/gG117yWYC73ICfVkCJv4hxa/9sc/2y9YCXfMBWT9N/zPd/WIAPxJ9INfc/tX+vNfP76tTWNL9ygiqWymkAwIm3ZDlNAgDWSb98BcClAl2PKgAMiyr2W+GLIfIHAWSZB6UBfPUCqABh8hVfjN8wNUEDGiHEKS9rlUFI8AoxTFPWeSnAFKiDzAhIARZRpqwxKcAKNsnT+945CYCGqsC94AzYRs0b4J93gOclbHoDaPRvlAOsIO8NsECXshwgiVFvgKhgO8sAGiFA9QL4KD7SnAFzAIa8AAYA0RocAWvii8UZYF4s3XqngObVhhmeWVcUJWj6AUVR6vwD0VQvr73dt/dA+5yQX8FDd6IzwJ2jFme5E0DxqMVB/657wE7kuB93D4jZAzJt26RgU1ujNtva6s67u5ZzbQ2731Wz/YrTrp98Kp+/4OfOS2nJdGPWR8ws13WZ/L2b9NAUWXLOL/aJx74th7Hvvs9hcuxJCS67P1NBidk1MEk0burDgOz4PJj+1FJ6jcrcgLsBPhRL5kob1VqtulFaTEZDVNx/QAmNoJi51o4AAAAASUVORK5CYII="
                alt="Info"
              />
              <span className="staking__tooltip">
                Staked Amount / Total Staked Amount * 100
              </span>
            </div>
          </div>
        </div>
        <div className="staking__block">
          <span className="staking__percent">0.000000467225875 ETH</span>
          <div className="staking__note">
            <span className="staking__name">5 minute rewards</span>
          </div>
        </div>
        <div className="staking__block">
          <span className="staking__value">0</span>
          <div className="staking__note">
            <span className="staking__name">Deposited</span>
          </div>
        </div>
      </div>
      <div className="staking-box">
        <div className="staking__content">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4 gy-lg-0">
            <div>
              <div className="staking__label">
                <span className="staking__label__name">Available Balance:</span>
                <span className="staking__label__value">0</span>
              </div>
              <div className="staking__field-box">
                <input
                  className="input"
                  type="number"
                  placeholder={0.0}
                  defaultValue={7525313}
                />
                <div className="staking__buttons">
                  <button className="btn staking__buttons__max btn_info">
                    Max
                  </button>
                  <button
                    className="btn btn_primary btn_small"
                    type="button"
                    disabled=""
                  >
                    Stake
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="staking__label">
                <span className="staking__label__name">Locked Balance:</span>
                <span className="staking__label__value">0</span>
              </div>
              <div className="staking__field-box">
                <input
                  className="input"
                  type="number"
                  placeholder={0.0}
                  defaultValue=""
                />
                <div className="staking__buttons">
                  <button
                    className="btn staking__buttons__max btn_info"
                    disabled=""
                  >
                    Max
                  </button>
                  <button
                    className="btn btn_primary btn_small"
                    type="button"
                    disabled=""
                  >
                    Withdraw
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="staking__label">
                <span className="staking__label__name">
                  <span className="timer">Rewards (Next rewards in --:--)</span>
                </span>
              </div>
              <div className="staking__total-box">
                <div className="staking__total">
                  <span className="staking__total__value">0 ETH</span>
                </div>
                <button
                  className="btn btn_primary btn_small"
                  type="button"
                  disabled=""
                >
                  Claim
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="staking">
      <div className="staking__header">
        <div className="staking__brand">
          <span className="staking__brand__text">Staking Pool #6</span>
        </div>
        <div className="staking__block">
          <div className="progress-bar">
            <div
              className="progress-bar__container"
              style={{ width: "51.4989%" }}
            >
              <div className="progress-bar__text">15 449 656 / 30 000 000</div>
            </div>
          </div>
        </div>
        <div className="staking__block">
          <span className="staking__percent">48.5011%</span>
          <div className="staking__note">
            <span className="staking__name">APY</span>
            <div className="staking__info">
              <img
                className="staking__icon svg"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAABg1BMVEUAAAAAAACAgIBVVapAQIBmZplVVYBdXYtVVYBiYolbW4BVZohgYIBaWodVY4BeXoZZWYBdXYBVYIBcXIVdXYNaYoBXX4NcXIBXXoBZX4JaYIBYXoJXXIBYXYBXYIJZXoJbX4JZXYJZXIBYXoFaXYBZX4FYXoBaXYFZX4BYXoFaXYBYXYFaX4BZXoFYXoBaXYFYXYFaX4BaXoFYX4FZXoBYX4BYX4BaXoFZXYBYXoFaXoBZX4BYXoBZXYBZXoBaXoBZXoBaXYBZX4BYXYBZXoBYX4BZXYBZXoBZXYBaXoBZXoBZX4BYXoBZXoBYXoBZXoBZXoBaXoBZXoBZXoBZXoBZX4BYXoBZXoBZXoBYXYBZXoBZXoBaX4BZXoBZXoBZXoBZXoBZXoBZXoBZXoBZX4BZXoBZXoBZXoBZXYBYXoBZXoBZXoBZXoBZX4BZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoD////7/zVuAAAAf3RSTlMAAQIDBAUGCwwNDg8QERITFBYYGSEiIyQmKzAxMjQ1OTs/UFFSU1RVVldYXV5fYmNlZm9xcnR8fX5/gIGCiYqLjY6PmZ2foaOkpaanra6ztLW5u73BwsTFycrLzM3Oz9DR0tPU1dbY2d3e4Obn6Onq6+zt7u/w8fL3+Pn6/P3+oILaZQAAAAFiS0dEgGW9nmgAAAJtSURBVFjDpZftQ9JQFMYfLApDC0qsNC0D6U3tTRAtBVqm0DuhJRjV0nJWZkzNEHb/9T4Mp4N77u7Y8/U557fd7dx7zwEIhePTz1c1/eBA11bzqdEwXGk4qxrMJkPNDMlmn0msM67WEt0S6Wcf6YyUPtPrkO4b+82Eqj7oEuVffM8ctdxP50d3mIT+3ibSu54wSWW4yziVZ9LK+Tn5b5gLvW4j+J4xV8q3roJYv1b8ThDS9vxb3KDPVwFcLvIJcdv/3+OFqGbl+t9xAbuRYx+AXz8jh/gG117yWYC73ICfVkCJv4hxa/9sc/2y9YCXfMBWT9N/zPd/WIAPxJ9INfc/tX+vNfP76tTWNL9ygiqWymkAwIm3ZDlNAgDWSb98BcClAl2PKgAMiyr2W+GLIfIHAWSZB6UBfPUCqABh8hVfjN8wNUEDGiHEKS9rlUFI8AoxTFPWeSnAFKiDzAhIARZRpqwxKcAKNsnT+945CYCGqsC94AzYRs0b4J93gOclbHoDaPRvlAOsIO8NsECXshwgiVFvgKhgO8sAGiFA9QL4KD7SnAFzAIa8AAYA0RocAWvii8UZYF4s3XqngObVhhmeWVcUJWj6AUVR6vwD0VQvr73dt/dA+5yQX8FDd6IzwJ2jFme5E0DxqMVB/657wE7kuB93D4jZAzJt26RgU1ujNtva6s67u5ZzbQ2731Wz/YrTrp98Kp+/4OfOS2nJdGPWR8ws13WZ/L2b9NAUWXLOL/aJx74th7Hvvs9hcuxJCS67P1NBidk1MEk0burDgOz4PJj+1FJ6jcrcgLsBPhRL5kob1VqtulFaTEZDVNx/QAmNoJi51o4AAAAASUVORK5CYII="
                alt="Info"
              />
              <span className="staking__tooltip">
                Staked Amount / Total Staked Amount * 100
              </span>
            </div>
          </div>
        </div>
        <div className="staking__block">
          <span className="staking__percent">0.000000980379046 ETH</span>
          <div className="staking__note">
            <span className="staking__name">5 minute rewards</span>
          </div>
        </div>
        <div className="staking__block">
          <span className="staking__value">0</span>
          <div className="staking__note">
            <span className="staking__name">Deposited</span>
          </div>
        </div>
      </div>
      <div className="staking-box">
        <div className="staking__content">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4 gy-lg-0">
            <div>
              <div className="staking__label">
                <span className="staking__label__name">Available Balance:</span>
                <span className="staking__label__value">0</span>
              </div>
              <div className="staking__field-box">
                <input
                  className="input"
                  type="number"
                  placeholder={0.0}
                  defaultValue={14550344}
                />
                <div className="staking__buttons">
                  <button className="btn staking__buttons__max btn_info">
                    Max
                  </button>
                  <button
                    className="btn btn_primary btn_small"
                    type="button"
                    disabled=""
                  >
                    Stake
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="staking__label">
                <span className="staking__label__name">Locked Balance:</span>
                <span className="staking__label__value">0</span>
              </div>
              <div className="staking__field-box">
                <input
                  className="input"
                  type="number"
                  placeholder={0.0}
                  defaultValue=""
                />
                <div className="staking__buttons">
                  <button
                    className="btn staking__buttons__max btn_info"
                    disabled=""
                  >
                    Max
                  </button>
                  <button
                    className="btn btn_primary btn_small"
                    type="button"
                    disabled=""
                  >
                    Withdraw
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="staking__label">
                <span className="staking__label__name">
                  <span className="timer">Rewards (Next rewards in --:--)</span>
                </span>
              </div>
              <div className="staking__total-box">
                <div className="staking__total">
                  <span className="staking__total__value">0 ETH</span>
                </div>
                <button
                  className="btn btn_primary btn_small"
                  type="button"
                  disabled=""
                >
                  Claim
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="staking">
      <div className="staking__header">
        <div className="staking__brand">
          <span className="staking__brand__text">Staking Pool #7</span>
        </div>
        <div className="staking__block">
          <div className="progress-bar">
            <div
              className="progress-bar__container"
              style={{ width: "98.6255%" }}
            >
              <div className="progress-bar__text">29 587 663 / 30 000 000</div>
            </div>
          </div>
        </div>
        <div className="staking__block">
          <span className="staking__percent">1.3744%</span>
          <div className="staking__note">
            <span className="staking__name">APY</span>
            <div className="staking__info">
              <img
                className="staking__icon svg"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAABg1BMVEUAAAAAAACAgIBVVapAQIBmZplVVYBdXYtVVYBiYolbW4BVZohgYIBaWodVY4BeXoZZWYBdXYBVYIBcXIVdXYNaYoBXX4NcXIBXXoBZX4JaYIBYXoJXXIBYXYBXYIJZXoJbX4JZXYJZXIBYXoFaXYBZX4FYXoBaXYFZX4BYXoFaXYBYXYFaX4BZXoFYXoBaXYFYXYFaX4BaXoFYX4FZXoBYX4BYX4BaXoFZXYBYXoFaXoBZX4BYXoBZXYBZXoBaXoBZXoBaXYBZX4BYXYBZXoBYX4BZXYBZXoBZXYBaXoBZXoBZX4BYXoBZXoBYXoBZXoBZXoBaXoBZXoBZXoBZXoBZX4BYXoBZXoBZXoBYXYBZXoBZXoBaX4BZXoBZXoBZXoBZXoBZXoBZXoBZXoBZX4BZXoBZXoBZXoBZXYBYXoBZXoBZXoBZXoBZX4BZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoD////7/zVuAAAAf3RSTlMAAQIDBAUGCwwNDg8QERITFBYYGSEiIyQmKzAxMjQ1OTs/UFFSU1RVVldYXV5fYmNlZm9xcnR8fX5/gIGCiYqLjY6PmZ2foaOkpaanra6ztLW5u73BwsTFycrLzM3Oz9DR0tPU1dbY2d3e4Obn6Onq6+zt7u/w8fL3+Pn6/P3+oILaZQAAAAFiS0dEgGW9nmgAAAJtSURBVFjDpZftQ9JQFMYfLApDC0qsNC0D6U3tTRAtBVqm0DuhJRjV0nJWZkzNEHb/9T4Mp4N77u7Y8/U557fd7dx7zwEIhePTz1c1/eBA11bzqdEwXGk4qxrMJkPNDMlmn0msM67WEt0S6Wcf6YyUPtPrkO4b+82Eqj7oEuVffM8ctdxP50d3mIT+3ibSu54wSWW4yziVZ9LK+Tn5b5gLvW4j+J4xV8q3roJYv1b8ThDS9vxb3KDPVwFcLvIJcdv/3+OFqGbl+t9xAbuRYx+AXz8jh/gG117yWYC73ICfVkCJv4hxa/9sc/2y9YCXfMBWT9N/zPd/WIAPxJ9INfc/tX+vNfP76tTWNL9ygiqWymkAwIm3ZDlNAgDWSb98BcClAl2PKgAMiyr2W+GLIfIHAWSZB6UBfPUCqABh8hVfjN8wNUEDGiHEKS9rlUFI8AoxTFPWeSnAFKiDzAhIARZRpqwxKcAKNsnT+945CYCGqsC94AzYRs0b4J93gOclbHoDaPRvlAOsIO8NsECXshwgiVFvgKhgO8sAGiFA9QL4KD7SnAFzAIa8AAYA0RocAWvii8UZYF4s3XqngObVhhmeWVcUJWj6AUVR6vwD0VQvr73dt/dA+5yQX8FDd6IzwJ2jFme5E0DxqMVB/657wE7kuB93D4jZAzJt26RgU1ujNtva6s67u5ZzbQ2731Wz/YrTrp98Kp+/4OfOS2nJdGPWR8ws13WZ/L2b9NAUWXLOL/aJx74th7Hvvs9hcuxJCS67P1NBidk1MEk0burDgOz4PJj+1FJ6jcrcgLsBPhRL5kob1VqtulFaTEZDVNx/QAmNoJi51o4AAAAASUVORK5CYII="
                alt="Info"
              />
              <span className="staking__tooltip">
                Staked Amount / Total Staked Amount * 100
              </span>
            </div>
          </div>
        </div>
        <div className="staking__block">
          <span className="staking__percent">0.000000021463880 ETH</span>
          <div className="staking__note">
            <span className="staking__name">5 minute rewards</span>
          </div>
        </div>
        <div className="staking__block">
          <span className="staking__value">0</span>
          <div className="staking__note">
            <span className="staking__name">Deposited</span>
          </div>
        </div>
      </div>
      <div className="staking-box">
        <div className="staking__content">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4 gy-lg-0">
            <div>
              <div className="staking__label">
                <span className="staking__label__name">Available Balance:</span>
                <span className="staking__label__value">0</span>
              </div>
              <div className="staking__field-box">
                <input
                  className="input"
                  type="number"
                  placeholder={0.0}
                  defaultValue={412337}
                />
                <div className="staking__buttons">
                  <button className="btn staking__buttons__max btn_info">
                    Max
                  </button>
                  <button
                    className="btn btn_primary btn_small"
                    type="button"
                    disabled=""
                  >
                    Stake
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="staking__label">
                <span className="staking__label__name">Locked Balance:</span>
                <span className="staking__label__value">0</span>
              </div>
              <div className="staking__field-box">
                <input
                  className="input"
                  type="number"
                  placeholder={0.0}
                  defaultValue=""
                />
                <div className="staking__buttons">
                  <button
                    className="btn staking__buttons__max btn_info"
                    disabled=""
                  >
                    Max
                  </button>
                  <button
                    className="btn btn_primary btn_small"
                    type="button"
                    disabled=""
                  >
                    Withdraw
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="staking__label">
                <span className="staking__label__name">
                  <span className="timer">Rewards (Next rewards in --:--)</span>
                </span>
              </div>
              <div className="staking__total-box">
                <div className="staking__total">
                  <span className="staking__total__value">0 ETH</span>
                </div>
                <button
                  className="btn btn_primary btn_small"
                  type="button"
                  disabled=""
                >
                  Claim
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="staking">
      <div className="staking__header">
        <div className="staking__brand">
          <span className="staking__brand__text">Staking Pool #8</span>
        </div>
        <div className="staking__block">
          <div className="progress-bar">
            <div
              className="progress-bar__container"
              style={{ width: "62.1368%" }}
            >
              <div className="progress-bar__text">18 641 044 / 30 000 000</div>
            </div>
          </div>
        </div>
        <div className="staking__block">
          <span className="staking__percent">37.8631%</span>
          <div className="staking__note">
            <span className="staking__name">APY</span>
            <div className="staking__info">
              <img
                className="staking__icon svg"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAABg1BMVEUAAAAAAACAgIBVVapAQIBmZplVVYBdXYtVVYBiYolbW4BVZohgYIBaWodVY4BeXoZZWYBdXYBVYIBcXIVdXYNaYoBXX4NcXIBXXoBZX4JaYIBYXoJXXIBYXYBXYIJZXoJbX4JZXYJZXIBYXoFaXYBZX4FYXoBaXYFZX4BYXoFaXYBYXYFaX4BZXoFYXoBaXYFYXYFaX4BaXoFYX4FZXoBYX4BYX4BaXoFZXYBYXoFaXoBZX4BYXoBZXYBZXoBaXoBZXoBaXYBZX4BYXYBZXoBYX4BZXYBZXoBZXYBaXoBZXoBZX4BYXoBZXoBYXoBZXoBZXoBaXoBZXoBZXoBZXoBZX4BYXoBZXoBZXoBYXYBZXoBZXoBaX4BZXoBZXoBZXoBZXoBZXoBZXoBZXoBZX4BZXoBZXoBZXoBZXYBYXoBZXoBZXoBZXoBZX4BZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoBZXoD////7/zVuAAAAf3RSTlMAAQIDBAUGCwwNDg8QERITFBYYGSEiIyQmKzAxMjQ1OTs/UFFSU1RVVldYXV5fYmNlZm9xcnR8fX5/gIGCiYqLjY6PmZ2foaOkpaanra6ztLW5u73BwsTFycrLzM3Oz9DR0tPU1dbY2d3e4Obn6Onq6+zt7u/w8fL3+Pn6/P3+oILaZQAAAAFiS0dEgGW9nmgAAAJtSURBVFjDpZftQ9JQFMYfLApDC0qsNC0D6U3tTRAtBVqm0DuhJRjV0nJWZkzNEHb/9T4Mp4N77u7Y8/U557fd7dx7zwEIhePTz1c1/eBA11bzqdEwXGk4qxrMJkPNDMlmn0msM67WEt0S6Wcf6YyUPtPrkO4b+82Eqj7oEuVffM8ctdxP50d3mIT+3ibSu54wSWW4yziVZ9LK+Tn5b5gLvW4j+J4xV8q3roJYv1b8ThDS9vxb3KDPVwFcLvIJcdv/3+OFqGbl+t9xAbuRYx+AXz8jh/gG117yWYC73ICfVkCJv4hxa/9sc/2y9YCXfMBWT9N/zPd/WIAPxJ9INfc/tX+vNfP76tTWNL9ygiqWymkAwIm3ZDlNAgDWSb98BcClAl2PKgAMiyr2W+GLIfIHAWSZB6UBfPUCqABh8hVfjN8wNUEDGiHEKS9rlUFI8AoxTFPWeSnAFKiDzAhIARZRpqwxKcAKNsnT+945CYCGqsC94AzYRs0b4J93gOclbHoDaPRvlAOsIO8NsECXshwgiVFvgKhgO8sAGiFA9QL4KD7SnAFzAIa8AAYA0RocAWvii8UZYF4s3XqngObVhhmeWVcUJWj6AUVR6vwD0VQvr73dt/dA+5yQX8FDd6IzwJ2jFme5E0DxqMVB/657wE7kuB93D4jZAzJt26RgU1ujNtva6s67u5ZzbQ2731Wz/YrTrp98Kp+/4OfOS2nJdGPWR8ws13WZ/L2b9NAUWXLOL/aJx74th7Hvvs9hcuxJCS67P1NBidk1MEk0burDgOz4PJj+1FJ6jcrcgLsBPhRL5kob1VqtulFaTEZDVNx/QAmNoJi51o4AAAAASUVORK5CYII="
                alt="Info"
              />
              <span className="staking__tooltip">
                Staked Amount / Total Staked Amount * 100
              </span>
            </div>
          </div>
        </div>
        <div className="staking__block">
          <span className="staking__percent">0.000000292136128 ETH</span>
          <div className="staking__note">
            <span className="staking__name">5 minute rewards</span>
          </div>
        </div>
        <div className="staking__block">
          <span className="staking__value">0</span>
          <div className="staking__note">
            <span className="staking__name">Deposited</span>
          </div>
        </div>
      </div>
      <div className="staking-box">
        <div className="staking__content">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4 gy-lg-0">
            <div>
              <div className="staking__label">
                <span className="staking__label__name">Available Balance:</span>
                <span className="staking__label__value">0</span>
              </div>
              <div className="staking__field-box">
                <input
                  className="input"
                  type="number"
                  placeholder={0.0}
                  defaultValue={11358956}
                />
                <div className="staking__buttons">
                  <button className="btn staking__buttons__max btn_info">
                    Max
                  </button>
                  <button
                    className="btn btn_primary btn_small"
                    type="button"
                    disabled=""
                  >
                    Stake
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="staking__label">
                <span className="staking__label__name">Locked Balance:</span>
                <span className="staking__label__value">0</span>
              </div>
              <div className="staking__field-box">
                <input
                  className="input"
                  type="number"
                  placeholder={0.0}
                  defaultValue=""
                />
                <div className="staking__buttons">
                  <button
                    className="btn staking__buttons__max btn_info"
                    disabled=""
                  >
                    Max
                  </button>
                  <button
                    className="btn btn_primary btn_small"
                    type="button"
                    disabled=""
                  >
                    Withdraw
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="staking__label">
                <span className="staking__label__name">
                  <span className="timer">Rewards (Next rewards in --:--)</span>
                </span>
              </div>
              <div className="staking__total-box">
                <div className="staking__total">
                  <span className="staking__total__value">0 ETH</span>
                </div>
                <button
                  className="btn btn_primary btn_small"
                  type="button"
                  disabled=""
                >
                  Claim
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="staking__faq">
    <div className="faq__wrapper">
      <h5>How is APY % calculated?</h5>
      <p className="text-muted">
        Staking has a floating rate, which depends on the total number of ETH
        rewards in the pool and the amount of tokens staked. Therefore, APY rate
        is calculated by the formula: Staked Amount / Total Staked Amount * 100
      </p>
    </div>
    <div className="faq__wrapper">
      <h5>Does staking have any locking period?</h5>
      <p className="text-muted">
        No, staking does not have any locks ups for tokens. You can withdraw and
        deposit tokens at any time.
      </p>
    </div>
    <div className="faq__wrapper">
      <h5>Why did I withdraw tokens and my rewards disappeared?</h5>
      <p className="text-muted">
        With the partial or complete withdrawal of tokens from the staking, your
        rewards are automatically claimed. This is done so that you do not need
        to spend additional fees on a separate transaction.
      </p>
    </div>
  </div>
</>
  )
}

export default App