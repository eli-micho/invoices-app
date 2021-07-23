import './styles.scss';
import { useState } from 'react';

//MaterialUI
import { Modal, FormControl, FormControlLabel, TextField, InputLabel, Input, Checkbox, Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

export default function NewInvoiceModal({ open, setModalOpen }) {
    const [date, setDate] = useState('');

    const handleChange = (e) => {
        setDate(e.target.value);
    };
    const handleSubmit = () => {

    };
    return (
            <Modal
                open={open}
                onClose={() => setModalOpen(false)}
            >
                <div className="newInvoice">
                    <div className="newInvoiceLeft"></div>
                    <div className="newInvoiceRight">
                        <div className="newInvoiceHeader">
                            <h1>Create New Invoice</h1>
                            <span 
                                className="closeModalBtn"
                                onClick={() => setModalOpen(false)}
                            >
                                <CloseIcon/>
                            </span>
                        </div>
                        <div className="newInvoiceTitle">
                            <h2>#AL34KT</h2>
                        </div>
                        <form className="newInvoiceForm">
                            <FormControl>
                                <InputLabel htmlFor="projectName">Project / Description</InputLabel>
                                <Input id=""/>
                            </FormControl>
                            <div className="dateContainer">
                                <FormControl>
                                    <InputLabel htmlFor="projectName">Issued On:</InputLabel>
                                    <Input id="" value={date} onChange={handleChange}/>
                                </FormControl>
                                <FormControl>
                                    <InputLabel htmlFor="projectName">Due On:</InputLabel>
                                    <Input id=""/>
                                </FormControl>
                                <FormControl/> 
                                <FormControlLabel
                                    value="recurring"
                                    control={<Checkbox color="primary"/>}
                                    label="This is a reccuring invoice (monthly)"
                                />
                            </div>
                            <div>
                                <FormControl>
                                    <InputLabel htmlFor="projectRecipient">Recipient:</InputLabel>
                                    <Input id=""/>
                                </FormControl>
                            </div>

                            <h2>Item List</h2>
                            <div>
                                <FormControl>
                                    <InputLabel htmlFor="projectName">Item Name</InputLabel>
                                    <Input id=""/>
                                </FormControl>
                                <FormControl>
                                    <InputLabel htmlFor="projectName">Qty.</InputLabel>
                                    <Input id="" type="number"/>
                                </FormControl>
                                <FormControl>
                                    <InputLabel htmlFor="projectName">Price</InputLabel>
                                    <Input id="" type="number"/>
                                </FormControl>
                                <FormControl>
                                    <InputLabel htmlFor="projectName">Total</InputLabel>
                                    <Input id="" type="number"/>
                                </FormControl>
                                <div>
                                    <span>+ Add Item</span>
                                    <span>Total:</span>
                                </div>
                            </div>

                            <div>
                                <TextField
                                    id="notes"
                                    label="Addtional Notes"
                                    variant="outlined"
                                    fullWidth
                                    multiline
                                />
                            </div>

                            <div>
                                <FormControl>
                                    <InputLabel htmlFor="projectName">Recipient Email</InputLabel>
                                    <Input id="" type="number"/>
                                </FormControl>
                            </div>
                            <hr/>
                            <div>
                                <span>Preview</span>
                                <Button variant="contained" className="newInvoiceBtn" onClick={handleSubmit}>Send</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
    )
}
