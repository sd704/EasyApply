import { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const SearchOption = ({ fieldName, fieldData }) => {

    const [selectedFields, setSelectedFields] = useState([]);
    const listData = [...fieldData];

    const handleChange = (event) => {
        const { target: { value }, } = event;
        setSelectedFields(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-checkbox-label">{fieldName}</InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={selectedFields}
                    onChange={handleChange}
                    input={<OutlinedInput label="Tag" />}
                    // renderValue={(selected) => selected.join(', ')}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {listData.map((listDataItem) => (
                        <MenuItem key={listDataItem} value={listDataItem}>
                            <Checkbox checked={selectedFields.indexOf(listDataItem) > -1} />
                            <ListItemText primary={listDataItem} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    )
}

export default SearchOption;