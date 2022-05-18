import { ReactNode, useState } from "react";
import { Theme, ThemeContext } from "../context/themeContext";
import { changeCssRootVariables } from "../model/ChangeCssRoot";
import { Storage } from "../model/Storage";

interface Props {
    children: ReactNode;
}

export const ThemeProvider = ({children, ...props}: Props) => {
    const [theme, setTheme] = useState<Theme>(
        Storage.getItem('theme') || Theme.LIGHT
    );

    changeCssRootVariables(theme);

    function changeTheme(theme: Theme) {
        Storage.setItem('theme', theme);
        setTheme(theme);
        changeCssRootVariables(theme);
    }

    return <ThemeContext.Provider value={{
        theme,
        changeTheme
    }}
    {...props}
    >{children}</ThemeContext.Provider>;
};