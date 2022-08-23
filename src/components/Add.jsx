import { Avatar, Button, ButtonGroup, Fab, Modal, TextField, Tooltip, Typography } from '@mui/material'
import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import React, { useState } from 'react'
import { Box, Stack } from '@mui/system'
import styled from '@emotion/styled'

const StyledModal = styled(Modal)({
  display:"flex",
  alignItems: "center",
  justifyContent: "center",
})

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});
const Add = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Tooltip onClick={()=>setOpen(true)} title="Delete" sx={{position:"fixed", bottom:20, left:{ xs: "calc(50% - 25px)", sm:30}}}>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>

      <StyledModal
        open={open}
        onClose={()=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
          <Typography variant="h6" textAlign="center">Create post</Typography>
          <UserBox>
            <Avatar
              src="data:image/jpeg;base64,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"
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant="span">
              Emilya Clark
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>


      </StyledModal>
    </>
  )
}

export default Add