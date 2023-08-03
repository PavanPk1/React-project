import './index.css'

const TabItem = props => {
  const {isActive, tabDetails, onClickBtn} = props
  const {tabId, displayText} = tabDetails
  const activeClassBtn = isActive ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeClassBtn}`}
        onClick={() => onClickBtn(tabId)}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
