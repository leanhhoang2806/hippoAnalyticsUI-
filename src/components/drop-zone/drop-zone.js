import React, { useState } from 'react';
import { DropzoneDialog } from 'material-ui-dropzone';
import Button from '@material-ui/core/Button';

const ExcelDropzoneDialog = () => {
    const [open, setOpen] = useState(false);
    const [excelFiles, setExcelFiles] = useState([]);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleSave = (files) => {
        setExcelFiles(files);
        setOpen(false);
    };
    console.log(excelFiles);

    return (
        <div>
            <Button onClick={() => handleOpen()}>
              Add Excel File
            </Button>
            <DropzoneDialog
                open={open}
                onSave={(files) => handleSave(files)}
                acceptedFiles={['text/csv']}
                maxFileSize={5000000}
                onClose={() => handleClose()}
            />
        </div>
    );
};

export default ExcelDropzoneDialog;
