import { useSelector } from "react-redux";
import { createIntl } from "@formatjs/intl";
import { RootState } from "../../redux/store";
import en_local from '../../common/formatJs/en/en.json'
import fr_local from '../../common/formatJs/fr/fr.json'

const messages = {
    en: en_local,
    fr: fr_local,
};

export const useLocalFormatHook = () => {
    const locale = useSelector((state: RootState) => state.app.locale);

    const intl = createIntl(
        {
            locale,
            messages: (messages as any)[locale] as any,
        }
    );

    const formatText = (messageId: string) => {
        return intl.formatMessage({id: messageId})
    }

    return {
        formatText
    }
}