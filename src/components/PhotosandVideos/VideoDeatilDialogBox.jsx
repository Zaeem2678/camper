import React, { useState, useRef } from "react";
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  Avatar,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import {
  Public,
  ArrowDropDown,
  MoreHoriz,
  Edit,
  ThumbUp,
  Comment as CommentIcon,
  Send,
  InsertPhoto,
  Videocam,
  GifBox,
  SentimentSatisfied,
  Favorite,
  Mood,
  SentimentDissatisfied,
  EmojiEmotions,
  Reply,
  Close,
} from "@mui/icons-material";

export default function VideoDetailDialog({ open, onClose, video }) {
  const [editing, setEditing] = useState(false);
  const [description, setDescription] = useState("This is a sample video description.");
  const [comments, setComments] = useState([
    { 
      id: 1, 
      author: "sajidztech", 
      text: "hello",
      reactions: [],
      replies: [],
      showReactions: false,
      showReplyInput: false
    }
  ]);
  const [newComment, setNewComment] = useState("");
  const [replyText, setReplyText] = useState("");
  const [replyingTo, setReplyingTo] = useState(null);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [showReactions, setShowReactions] = useState(false);
  const [chosenReaction, setChosenReaction] = useState(null);
  const commentInputRef = useRef(null);

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    setComments([...comments, { id: comments.length + 1, author: "You", text: newComment }]);
    setNewComment("");
  };

  const handleReactionSelect = (type) => {
    setChosenReaction(type);
    setShowReactions(false);
  };

  const focusCommentInput = () => commentInputRef.current?.focus();

  const renderReactionIcon = (reaction) => {
    switch (reaction) {
      case "like":
        return <ThumbUp sx={{ fontSize: 16, color: "blue" }} />;
      case "love":
        return <Favorite sx={{ fontSize: 16, color: "red" }} />;
      case "haha":
        return <EmojiEmotions sx={{ fontSize: 16, color: "orange" }} />;
      case "sad":
        return <SentimentDissatisfied sx={{ fontSize: 16, color: "blue" }} />;
      case "wow":
        return <Mood sx={{ fontSize: 16, color: "gold" }} />;
      default:
        return <ThumbUp sx={{ fontSize: 16, color: "gray" }} />;
    }
  };

  const renderReactionButtonIcon = () => {
    switch (chosenReaction) {
      case "like":
        return <ThumbUp sx={{ color: "blue" }} />;
      case "love":
        return <Favorite sx={{ color: "red" }} />;
      case "haha":
        return <EmojiEmotions sx={{ color: "orange" }} />;
      case "sad":
        return <SentimentDissatisfied sx={{ color: "blue" }} />;
      case "wow":
        return <Mood sx={{ color: "gold" }} />;
      default:
        return <ThumbUp sx={{ color: "gray" }} />;
    }
  };

  const handleCommentReaction = (commentId, reaction) => {
    setComments(comments.map(comment => {
      if (comment.id === commentId) {
        const existingReaction = comment.reactions.find(r => r.user === "You");
        if (existingReaction) {
          return {
            ...comment,
            reactions: comment.reactions.map(r => 
              r.user === "You" ? { ...r, type: reaction } : r
            ),
            showReactions: false
          };
        } else {
          return {
            ...comment,
            reactions: [...comment.reactions, { user: "You", type: reaction }],
            showReactions: false
          };
        }
      }
      return comment;
    }));
  };

  const handleAddReply = (commentId) => {
    if (!replyText.trim()) return;
    setComments(comments.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [...comment.replies, { id: Date.now(), author: "You", text: replyText }],
          showReplyInput: false
        };
      }
      return comment;
    }));
    setReplyText("");
    setReplyingTo(null);
  };

  const toggleReplyInput = (commentId) => {
    setComments(comments.map(comment => {
      if (comment.id === commentId) {
        return { ...comment, showReplyInput: !comment.showReplyInput };
      }
      return comment;
    }));
    setReplyingTo(commentId);
  };

  const toggleCommentReactions = (commentId) => {
    setComments(comments.map(comment => {
      if (comment.id === commentId) {
        return { ...comment, showReactions: !comment.showReactions };
      }
      return comment;
    }));
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      maxWidth="lg" 
      fullWidth 
      sx={{
        marginTop: "40px",
        "& .MuiDialog-paper": {
          maxHeight: "calc(100vh - 80px)",
          overflow: "visible",
          position: "relative"
        }
      }}
    >
      <Box
        sx={{
          position: "absolute",
          right: -20,
          top: -20,
          zIndex: 9999,
        }}
      >
        <IconButton
          onClick={onClose}
          size="small"
          sx={{
            bgcolor: "white",
            color: "black",
            width: 30,
            height: 30,
            boxShadow: "0px 2px 8px rgba(0,0,0,0.3)",
            "&:hover": {
              bgcolor: "#f0f0f0",
            },
            "& .MuiSvgIcon-root": {
              fontSize: 24
            }
          }}
        >
          <Close />
        </IconButton>
      </Box>

      <DialogContent sx={{ 
        display: "flex", 
        p: 0,
        height: "calc(100vh - 80px)",
        overflow: "hidden",
      }}>
        <Box 
          flex={0.7} 
          sx={{ 
            background: "#000",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden"
          }}
        >
          <video
            controls
            style={{ 
              width: "100%", 
              height: "100%", 
              objectFit: "contain"
            }}
            src={video.url}
          />
        </Box>

        <Box 
          flex={0.3} 
          sx={{ 
            p: 2, 
            display: "flex", 
            flexDirection: "column",
            height: "100%",
            overflowY: "auto",
            overflowX: "hidden"
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 3, flexShrink: 0 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Avatar sx={{ bgcolor: "#f0f2f5", width: 35, height: 35 }} />
              <Box>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Typography fontWeight="bold" fontSize={13}>sajidztech</Typography>
                  <Typography fontSize={12} color="#888">posted an update</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <Typography variant="caption">1 hour ago</Typography>
                  <Public fontSize="small" />
                  <ArrowDropDown fontSize="small" />
                </Box>
              </Box>
            </Box>

            <Box>
              <IconButton size="small" onClick={(e) => setMenuAnchorEl(e.currentTarget)}>
                <MoreHoriz />
              </IconButton>
              <Menu
                anchorEl={menuAnchorEl}
                open={Boolean(menuAnchorEl)}
                onClose={() => setMenuAnchorEl(null)}
              >
                <MenuItem>Change Thumbnail</MenuItem>
                <MenuItem>Turn Off Commenting</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Download</MenuItem>
                <MenuItem>Turn Off Notifications</MenuItem>
              </Menu>
            </Box>
          </Box>

          {!editing ? (
            <Typography
              onClick={() => setEditing(true)}
              sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3, cursor: "pointer", fontSize: 13 ,color:"primary.main"}}
            >
              <Edit fontSize="small" color="primary.main" /> Add the description
            </Typography>
          ) : (
            <Box sx={{ mb: 1, flexShrink: 0 }}>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                style={{
                  width: "100%",
                  padding: 8,
                  borderRadius: 8,
                  border: "1px solid #ccc",
                  fontFamily: "inherit",
                  resize: "none",
                }}
              />
              <Box sx={{ display: "flex", gap: 1, mt: 0.5 }}>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => setEditing(false)}
                  sx={{ fontSize: 12, height: 28 }}
                >
                  Done
                </Button>
                <Button
                  size="small"
                  onClick={() => setEditing(false)}
                  sx={{ fontSize: 12, height: 28 }}
                >
                  Cancel
                </Button>
              </Box>
            </Box>
          )}

          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1, flexShrink: 0 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              {renderReactionIcon(chosenReaction)}
              <Typography fontSize={14} color="gray">
                {chosenReaction ? "You" : "You"} and 24 others
              </Typography>
            </Box>
            <Typography sx={{ color: "gray", fontSize: 14 }}>
              {comments.length} comments
            </Typography>
          </Box>

          <Divider sx={{ flexShrink: 0 }}/>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 8, py: 0.7, flexShrink: 0 }}>
            <Box
              sx={{ position: "relative" }}
              onMouseEnter={() => setShowReactions(true)}
              onMouseLeave={() => setShowReactions(false)}
            >
              <Button
                startIcon={renderReactionButtonIcon()}
                variant="text"
                size="small"
                sx={{ color: chosenReaction ? "#333" : "gray", textTransform: "none" }}
              >
                {chosenReaction ? chosenReaction.charAt(0).toUpperCase() + chosenReaction.slice(1) : "Like"}
              </Button>
              {showReactions && (
                <Box
                  sx={{
                    position: "absolute",
                    top: -50,
                    left: 0,
                    background: "#fff",
                    borderRadius: 20,
                    p: 1,
                    boxShadow: 2,
                    display: "flex",
                    gap: 1,
                    zIndex: 10,
                  }}
                >
                  <IconButton size="small" onClick={() => handleReactionSelect("like")}>
                    <ThumbUp color="primary" />
                  </IconButton>
                  <IconButton size="small" onClick={() => handleReactionSelect("love")}>
                    <Favorite color="error" />
                  </IconButton>
                  <IconButton size="small" onClick={() => handleReactionSelect("haha")}>
                    <EmojiEmotions sx={{ color: "orange" }} />
                  </IconButton>
                  <IconButton size="small" onClick={() => handleReactionSelect("sad")}>
                    <SentimentDissatisfied sx={{ color: "blue" }} />
                  </IconButton>
                  <IconButton size="small" onClick={() => handleReactionSelect("wow")}>
                    <Mood sx={{ color: "gold" }} />
                  </IconButton>
                </Box>
              )}
            </Box>

            <Button
              startIcon={<CommentIcon sx={{ color: "gray" }} />}
              variant="text"
              size="small"
              sx={{ color: "gray", textTransform: "none" }}
              onClick={focusCommentInput}
            >
              Comment
            </Button>
          </Box>

          <Divider sx={{ flexShrink: 0 }}/>

          <Box
            sx={{
              mt: 1,
              flexGrow: 1,
              overflowY: "auto",
              "&::-webkit-scrollbar": { 
                width: "6px",
                display: "none"
              },
              scrollbarWidth: "none",
              msOverflowStyle: "none"
            }}
          >
            {comments.map((c) => (
              <Box key={c.id} sx={{ display: "flex", mb: 2 }}>
                <Avatar sx={{ bgcolor: "#f0f2f5", width: 32, height: 32, mr: 1 }}>
                  {c.author[0].toUpperCase()}
                </Avatar>
                <Box sx={{ flex: 1 }}>
                  <Box sx={{ background: "#f0f2f5", p: 1, borderRadius: 2, mb: 0.5, maxWidth: 175 }}>
                    <Typography fontWeight="bold" fontSize={14}>{c.author}</Typography>
                    <Typography fontSize={14} sx={{ background: "#f0f2f5", p: 0.3, borderRadius: 2 }}>{c.text}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: 1.5, ml: 0.5 }}>
                    <Box sx={{ position: "relative" }}>
                      <Typography 
                        variant="caption" 
                        sx={{ 
                          color: "gray", 
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: 0.5
                        }}
                        onClick={() => toggleCommentReactions(c.id)}
                      >
                        {c.reactions.length > 0 ? (
                          <>
                            {renderReactionIcon(c.reactions.find(r => r.user === "You")?.type)}
                            {c.reactions.length} {c.reactions.length === 1 ? "reaction" : "reactions"}
                          </>
                        ) : (
                          "Like"
                        )}
                      </Typography>
                      {c.showReactions && (
                        <Box
                          sx={{
                            position: "absolute",
                            top: -50,
                            left: 0,
                            background: "#fff",
                            borderRadius: 20,
                            p: 1,
                            boxShadow: 2,
                            display: "flex",
                            gap: 1,
                            zIndex: 10,
                          }}
                        >
                          <IconButton size="small" onClick={() => handleCommentReaction(c.id, "like")}>
                            <ThumbUp color="primary" />
                          </IconButton>
                          <IconButton size="small" onClick={() => handleCommentReaction(c.id, "love")}>
                            <Favorite color="error" />
                          </IconButton>
                          <IconButton size="small" onClick={() => handleCommentReaction(c.id, "haha")}>
                            <EmojiEmotions sx={{ color: "orange" }} />
                          </IconButton>
                          <IconButton size="small" onClick={() => handleCommentReaction(c.id, "sad")}>
                            <SentimentDissatisfied sx={{ color: "blue" }} />
                          </IconButton>
                          <IconButton size="small" onClick={() => handleCommentReaction(c.id, "wow")}>
                            <Mood sx={{ color: "gold" }} />
                          </IconButton>
                        </Box>
                      )}
                    </Box>
                    <Typography 
                      variant="caption" 
                      sx={{ color: "gray", cursor: "pointer" }}
                      onClick={() => toggleReplyInput(c.id)}
                    >
                      Reply
                    </Typography>
                    <Typography variant="caption" sx={{ color: "gray" }}>20m</Typography>
                  </Box>

                  {c.replies.length > 0 && (
                    <Box sx={{ ml: 4, mt: 1 }}>
                      {c.replies.map((reply) => (
                        <Box key={reply.id} sx={{ display: "flex", mb: 1 }}>
                          <Avatar sx={{ bgcolor: "#f0f2f5", width: 28, height: 28, mr: 1 }}>
                            {reply.author[0].toUpperCase()}
                          </Avatar>
                          <Box>
                            <Box sx={{ background: "#f0f2f5", p: 1, borderRadius: 2, mb: 0.5 }}>
                              <Typography fontWeight="bold" fontSize={13}>{reply.author}</Typography>
                              <Typography fontSize={13}>{reply.text}</Typography>
                            </Box>
                            <Box sx={{ display: "flex", gap: 1.5, ml: 0.5 }}>
                              <Typography variant="caption" sx={{ color: "gray" }}>Like</Typography>
                              <Typography variant="caption" sx={{ color: "gray" }}>Reply</Typography>
                              <Typography variant="caption" sx={{ color: "gray" }}>10m</Typography>
                            </Box>
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  )}

                  {c.showReplyInput && (
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1, ml: 4 }}>
                      <Avatar sx={{ bgcolor: "#f0f2f5", width: 28, height: 28 }} />
                      <Box
                        sx={{
                          flexGrow: 1,
                          display: "flex",
                          alignItems: "center",
                          border: "1px solid #ccc",
                          borderRadius: 2,
                          pl: 1,
                        }}
                      >
                        <input
                          type="text"
                          value={replyText}
                          onChange={(e) => setReplyText(e.target.value)}
                          placeholder="Write a reply..."
                          style={{
                            flexGrow: 1,
                            border: "none",
                            outline: "none",
                            padding: 8,
                            background: "transparent",
                            fontSize: 14,
                          }}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") handleAddReply(c.id);
                          }}
                        />
                        {replyText && (
                          <IconButton size="small" onClick={() => handleAddReply(c.id)}>
                            <Send fontSize="small" sx={{ color: "gray" }} />
                          </IconButton>
                        )}
                      </Box>
                    </Box>
                  )}
                </Box>
              </Box>
            ))}
          </Box>

          <Box sx={{ 
            display: "flex", 
            alignItems: "center", 
            gap: 1, 
            mt: "auto",
            pt: 2,
            flexShrink: 0
          }}>
            <Avatar sx={{ bgcolor: "#f0f2f5", width: 32, height: 32 }} />
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                border: "1px solid #ccc",
                borderRadius: 2,
                pl: 1,
              }}
            >
              <input
                ref={commentInputRef}
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write a comment..."
                style={{
                  flexGrow: 1,
                  border: "none",
                  outline: "none",
                  padding: 8,
                  background: "transparent",
                  fontSize: 14,
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleAddComment();
                }}
              />
              {newComment ? (
                <IconButton size="small" onClick={handleAddComment}>
                  <Send fontSize="small" sx={{ color: "gray" }} />
                </IconButton>
              ) : (
                <>
                  <IconButton size="small"><InsertPhoto fontSize="small" /></IconButton>
                  <IconButton size="small"><Videocam fontSize="small" /></IconButton>
                  <IconButton size="small"><GifBox fontSize="small" /></IconButton>
                  <IconButton size="small"><SentimentSatisfied fontSize="small" /></IconButton>
                </>
              )}
            </Box>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
