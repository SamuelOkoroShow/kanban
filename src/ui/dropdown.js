function DropdownMenu() {

	const [activeMenu, setActiveMenu] = useState('main');

	function DropdownItem(props) {
		return(<a href="#" className='menu-item' onClick = {() => props.goToMenu && setActiveMenu(props.goToMenu)}>
		<span className='icon-button'>{props.leftIcon}</span>
		{props.children}
		<span className = "icon-button">{props.rightIcon}</span>
		</a>
		)
	}

	return(<div className="dropdown">
	<CSSTransition in={activeMenu === 'main'} className='menu-primary' unmountOnExit timeout = {500}>
		<div className = 'menu'>
			<DropdownItem>My Profile</DropdownItem>
			<DropdownItem
				goToMenu = "settings"
				leftIcon = "😇"
				rightIcon = "😇">
				</DropdownItem>
		</div>
		</CSSTransition>
		<CSSTransition in={activeMenu === 'settings'} className="menu-secondary" unmountOnExit timeout = {500}>
		<div className = 'menu'>
			<DropdownItem
				goToMenu = 'main'
				rightIcon = "😇">
				</DropdownItem>
				<DropdownItem>Settings</DropdownItem>
		</div>
	</CSSTransition>
	</div>)
}

function NavItem(props) {
	const [open, setOpen] = useState(false)
	return(<li className = "nav-item">
		<a href = "#" onClick = {() => setOpen(!open)} className="icon-button">
		{props.icon}
		</a>
		{open && props.children}
		</li>)
}

function Navbar(props) {
	return (
		<nav className='navbar'>
			<ul className='navbar-nav'>
			{props.children}
			</ul>
		</nav>
		);
}
