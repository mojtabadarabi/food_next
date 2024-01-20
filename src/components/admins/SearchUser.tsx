import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { debounce } from '@mui/material/utils';
import * as React from 'react';

interface MainTextMatchedSubstrings {
    offset: number;
    length: number;
}
interface StructuredFormatting {
    main_text: string;
    secondary_text: string;
    main_text_matched_substrings?: readonly MainTextMatchedSubstrings[];
}
interface PlaceType {
    description: string;
    structured_formatting: StructuredFormatting;
}

interface Props {
    onSearch: (str: Record<'username', string>, callBack: (data: any) => void) => void
    loading: boolean
    onSelect: (data: any) => void, label: string
}

export default function SearchAsync({ onSearch, loading, onSelect, label }: Props) {
    const [value, setValue] = React.useState<PlaceType | null>(null);
    const [inputValue, setInputValue] = React.useState('');
    const [options, setOptions] = React.useState<readonly PlaceType[]>([]);

    const fetch = React.useMemo(
        () =>
            debounce(
                (
                    request: { input: string },
                    callback: (results?: readonly PlaceType[]) => void,
                ) => {
                    if (request.input && request.input.trim().length > 4) {
                        onSearch({ username: request.input }, (list: any) => {
                            list && setOptions(list)
                        })
                    }
                },
                400,
            ),
        [],
    );

    React.useEffect(() => {
        let active = true;
        if (inputValue.trim() === '') return
        fetch({ input: inputValue }, (results?: readonly PlaceType[]) => {
            if (active) {
                let newOptions: readonly PlaceType[] = [];

                if (value) {
                    newOptions = [value];
                }

                if (results) {
                    newOptions = [...newOptions, ...results];
                }

                newOptions && setOptions(newOptions);
            }
        });

        return () => {
            active = false;
        };
    }, [value, inputValue, fetch]);

    return (
        <Autocomplete
            getOptionLabel={(option:any) =>
                typeof option === 'string' ? option : option.name
            }
            filterOptions={(x) => x}
            options={options}
            autoComplete
            includeInputInList
            loading={loading}
            filterSelectedOptions
            value={value}
            noOptionsText="No locations"
            onChange={(event: any, newValue: PlaceType | null) => {
                setOptions(newValue ? [newValue, ...options] : options);
                setValue(newValue);
                onSelect(newValue)
            }}
            onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
            }}
            renderInput={(params) => (
                <TextField {...params} label={label} fullWidth />
            )}
            renderOption={(props, option: any) => {
                return (
                    <li {...props}>
                        <Grid container alignItems="center">
                            <Grid item sx={{ width: 'calc(100% - 44px)', wordWrap: 'break-word' }}>
                                <Box
                                    component="span"
                                >
                                    {option.name}
                                </Box>
                            </Grid>
                        </Grid>
                    </li>
                );
            }}
        />
    );
}