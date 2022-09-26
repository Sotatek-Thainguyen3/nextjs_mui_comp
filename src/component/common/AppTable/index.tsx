import React, {useState} from 'react';
import {DataGrid, DataGridProps} from '@mui/x-data-grid'
import {Box, MenuItem, Pagination, Select} from "@mui/material";

export interface IAppTable extends DataGridProps {
    height?: string | number,
    pageOptions?: number[],
}

export const AppTable = ({rows, columns, pageOptions = [5, 10, 25], height = 370, sx, ...props}: IAppTable) => {
    const [pageSizeRef, setPageSizeRef] = useState<number>(pageOptions[0]);
    const [page, setPage] = useState<number>(0);

    return (
        <Box sx={{height: height, width: '100%', position: 'relative'}}>
            <DataGrid
                rows={rows}
                columns={columns}
                checkboxSelection
                experimentalFeatures={{newEditingApi: true}}
                page={page}
                pageSize={pageSizeRef}
                hideFooterPagination={true}
                sx={{
                    '& .MuiDataGrid-columnHeader .MuiDataGrid-menuIcon': {
                        display: 'none'
                    },
                    ...sx
                }}
                {...props}
            />
            <AppPagination
                page={page}
                pageSize={pageSizeRef}
                pageOptions={pageOptions}
                totalPages={Math.ceil(rows.length / pageSizeRef)}
                onChangePage={(value) => setPage(value)}
                onChangePageSize={(newPageSize) => setPageSizeRef(+newPageSize)}/>
        </Box>
    );
};

export interface IAppPagination {
    pageSize?: number;
    page?: number;
    totalPages?: number;
    onChangePage?: (newPage: number) => void;
    onChangePageSize?: (newPageSize: any) => void;
    pageOptions?: number[]
}

export const AppPagination = ({
                                  pageSize,
                                  page = 0,
                                  totalPages = 0,
                                  onChangePage,
                                  onChangePageSize,
                                  pageOptions
                              }: IAppPagination) => {
    return (
        <>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={pageSize}
                label="Age"
                variant={'standard'}
                onChange={(value) => onChangePageSize && onChangePageSize(value.target.value)}
                sx={{
                    position: 'absolute',
                    right: '1rem',
                    bottom: '.4rem',
                }}
            >
                {pageOptions?.map(item => {
                    return (<MenuItem key={item} value={item}>{item}</MenuItem>)
                })}
            </Select>
            <Pagination
                color="primary"
                count={totalPages}
                page={page + 1}
                onChange={(event, value) => onChangePage && onChangePage(value - 1)}
                sx={{
                    position: 'absolute',
                    bottom: '.4rem',
                    left: '50%',
                    transform: 'translateX(-50%)'
                }}
            />
        </>
    )
}
