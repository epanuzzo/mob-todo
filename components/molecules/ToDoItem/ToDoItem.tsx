import React, { useState } from "react";
import { PanResponder } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { ToDoItemProps } from "./ToDoItem.types";
import { Modal } from "../../atoms/Modal";
import {
  ItemContainer,
  ContentContainer,
  ToDoText,
  ActionsContainer,
  ActionButton,
} from "./ToDoItem.styled";

/**
 * ToDoItem component with toggle actions and confirmation modal
 */
export const ToDoItem: React.FC<ToDoItemProps> = ({
  text,
  done = false,
  onDone,
  onEdit,
  onDelete,
}) => {
  const [showActions, setShowActions] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (evt, gestureState) => {
      return (
        Math.abs(gestureState.dx) > Math.abs(gestureState.dy) &&
        Math.abs(gestureState.dx) > 10
      );
    },
    onPanResponderRelease: (evt, gestureState) => {
      if (gestureState.dx < -50) {
        // Swipe left - show actions
        setShowActions(true);
      } else if (gestureState.dx > 50) {
        // Swipe right - hide actions
        setShowActions(false);
      }
    },
  });

  const handleContentPress = () => {
    if (showActions) {
      setShowActions(false);
    } else if (onDone) {
      onDone();
    }
  };

  const handleLongPress = () => {
    setShowActions(!showActions);
  };

  const handleEditPress = () => {
    setShowActions(false);
    if (onEdit) {
      onEdit();
    }
  };

  const handleDeletePress = () => {
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    setShowDeleteModal(false);
    setShowActions(false);
    if (onDelete) {
      onDelete();
    }
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
  };

  return (
    <>
      <ItemContainer {...panResponder.panHandlers}>
        <ContentContainer
          done={done}
          onPress={handleContentPress}
          onLongPress={handleLongPress}
          activeOpacity={0.7}
        >
          <ToDoText done={done}>{text}</ToDoText>
        </ContentContainer>
        {showActions && (
          <ActionsContainer>
            <ActionButton variant="edit" onPress={handleEditPress}>
              <MaterialIcons name="edit" size={20} color="white" />
            </ActionButton>
            <ActionButton variant="delete" onPress={handleDeletePress}>
              <MaterialIcons name="delete" size={20} color="white" />
            </ActionButton>
          </ActionsContainer>
        )}
      </ItemContainer>

      <Modal
        visible={showDeleteModal}
        title="Delete Task"
        text="Are you sure you want to delete this task? This action cannot be undone."
        buttons={[
          {
            text: "Cancel",
            onPress: handleCancelDelete,
            variant: "secondary",
          },
          {
            text: "Delete",
            onPress: handleConfirmDelete,
            variant: "danger",
          },
        ]}
        onClose={handleCancelDelete}
      />
    </>
  );
};
