import { ThemeContext, themes } from '../context/ThemeContext';
import './styles/DarkModeSwitch.css'

function DarkModeSwitch() {
    const handleChange = (event:any, changeTheme:any) => {
        if (event.target.checked) {
          changeTheme(themes.dark);
        } else {
          changeTheme(themes.light);
        }
    };

    return(
        <ThemeContext.Consumer>
             {({ changeTheme, themes }) => (
            <div className="dark-mode-switch">
                <label className="switch">
                    <input type="checkbox"
                        onChange={event =>handleChange(event, changeTheme)}  
                        defaultChecked={themes === "dark-theme"? true:false}      
                    />
                </label>
            </div>
             )}
        </ThemeContext.Consumer>
    );
}

export default DarkModeSwitch;