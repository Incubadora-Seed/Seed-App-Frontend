import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SelectList } from 'react-native-dropdown-select-list';
import styles from '../styles/Dropdown1.js';

export default function Dropdown1({ style, placeholder, icon, data, setSelected }) {
    return (
        <View style={style}>
            <Ionicons name={icon} size={24} color='#000' style={styles.dropdownIcon} />
            <SelectList placeholder={placeholder} fontFamily='Poppins_400Regular' data={data}
                save='value' search={false} boxStyles={styles.dropdownBox} inputStyles={styles.dropdownTxt}
                setSelected={(val) => setSelected(val)}
                arrowicon={(<Ionicons name="chevron-down-outline" size={24} color="black" />)} />
        </View>
    )
}