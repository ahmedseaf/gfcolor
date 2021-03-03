import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { SketchPicker } from 'react-color';

function SmoothSketch(props) {
 
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
     
      <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          {props.title}
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
        
        <DialogContent>
          <Button variant="contained" onClick={handleClose}>
            Close
          </Button>
          <div className="color-box-sketch">
              <SketchPicker 
                key="colorOne"
                color={props.color} 
                onChange={props.handleChange}
              />
             
            </div>
        </DialogContent>
      </Dialog>
      </div>

      
     
    </div>
  )
}

export default SmoothSketch;
