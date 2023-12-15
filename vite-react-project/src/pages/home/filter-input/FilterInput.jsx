import Search from 'antd/es/input/Search';
import {forwardRef} from 'react';

const FilterInput = forwardRef(function FilterInput({onSearch},ref){
    return (
        <div>
            <Search color='primary' ref={ref} placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
        </div>
    );
});

export default FilterInput;