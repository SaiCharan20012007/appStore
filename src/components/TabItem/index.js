// Write your code here
import './index.css'

const TabItem = props => {
  const {displayText, tabId, onClickTab, isActive} = props
  const onClickTabItem = () => {
    onClickTab(tabId)
  }
  const select = isActive ? 'name2' : 'name'
  const selected = isActive ? 'tab2' : 'tab'
  return (
    <li className={selected}>
      <button onClick={onClickTabItem} type="button" className="tabBtn">
        <p className={select}>{displayText}</p>
      </button>
    </li>
  )
}
export default TabItem
