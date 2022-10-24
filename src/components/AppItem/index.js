// Write your code here
import './index.css'

const AppItem = props => {
  const {appName, imageUrl} = props
  return (
    <li className="appItem">
      <img src={imageUrl} alt={appName} className="icon" />
      <p className="appname">{appName}</p>
    </li>
  )
}

export default AppItem
