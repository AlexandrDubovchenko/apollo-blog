import { FC, FormEvent, useState } from "react";
import { Button } from "../common/Button";
import { Input, InputVariants } from "../common/Input";
import { useCreatePostMutation } from "./generated/Post.mutation.generated";
import { Modal, ModalProps } from "../Modal";
import { Form } from "../common/Form";
import { GetPostsDocument } from "../PostList/generated/Post.query.generated";

export const AddPostModal: FC<ModalProps> = ({ ...rest }) => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [createPostMutation] = useCreatePostMutation();
  const addPost = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createPostMutation({
        variables: {
          title,
          body,
        },
      });
    } catch (error) {
      console.log(error);
    }
    rest.closeModal();
  };
  return (
    <Modal {...rest}>
      <Form onSubmit={addPost}>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mb-10"
          placeholder="Enter title"
        />
        <Input
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="mb-10"
          variant={InputVariants.textarea}
          placeholder="Enter post"
        />
        <Button type="submit">Add</Button>
      </Form>
    </Modal>
  );
};
