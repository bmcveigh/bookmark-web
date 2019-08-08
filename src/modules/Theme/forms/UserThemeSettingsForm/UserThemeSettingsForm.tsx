import * as React from 'react';

import { connect } from 'react-redux';
import ThemeIcon from "../../components/ThemeIcon/ThemeIcon";

class UserThemeSettingsForm extends React.Component {
  public handleClick = () => {
    // todo: implement this handler.
  };

  public handleChange = () => {
    // const u = this.props.user;
    //
    // if (!u.preferences) {
    //   u.preferences = {};
    // }
    //
    // const themeUpdate = u.preferences.themeSettings;
    // themeUpdate.colors = event.target.value;
    // u.preferences.themeSettings = themeUpdate;
    // this.props.dispatch(updateUserById(u._id, u));
    // this.props.dispatch(getUserPreferenceStyles(this.props.user));

    // todo: implement this handler.
  };

  public render() {
    const classes = require('./UserThemeSettingsForm.scss');
    const globalStyles = classes;
    const themes = require('./UserThemeSettingsForm.themes.json');

    // const user = this.props.user;
    // const preferences = user.preferences || {};
    const themeSettings = {
      "colors": "#194234,#9c2e33,#E7C12e,#194234,#9c2e33,#FFFFFF,#ee6030,#9C2E33",
      "machineName": "Autumn",
      "name": "Autumn",
    };
    // todo: remove this hardcoding.
    const selectedTheme = themeSettings;
    //
    // let selectedTheme = {};
    // if (this.refs.themes) {
    //   selectedTheme = themes.find((theme => {
    //     if (this.refs.themes.value === theme.machineName) {
    //       return theme;
    //     }
    //     return themeSettings;
    //   }));
    // }
    //
    // if (this.props.user.data) {
    //   return <div>Loading...</div>;
    // }

    return (
      <form>
        <h3>Theme Settings</h3>
        <div className="row">
          {
            themes.map((theme: any, key: any) => {
              const isChecked = theme.machineName === themeSettings.machineName;

              return (
                <div
                  key={key}
                  className={`col-md-2 ${classes.ThemeChoiceWrapper}`}
                >
                  <div>
                    <ThemeIcon theme={theme} />
                  </div>
                  <div className={globalStyles.radio}>
                    <input
                      type="radio"
                      name="themes"
                      value={theme.machineName}
                      id={theme.machineName}
                      onClick={this.handleClick}
                      defaultChecked={isChecked}
                    />
                    <label className="label" htmlFor={theme.machineName}>{theme.name}</label>
                  </div>
                </div>
              );
            })
          }
        </div>
        <label className="label" htmlFor="colors">
          Colors
        </label>
        <div className={`${globalStyles.input} ${globalStyles['input-fullWidth']}`}>
          <input
            type="text"
            id="colors"
            placeholder="Input"
            defaultValue={selectedTheme.colors}
            onChange={this.handleChange}
          />
        </div>
      </form>
    );
  }
}

export default connect()(UserThemeSettingsForm);
