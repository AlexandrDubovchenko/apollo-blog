import { schemaComposer } from "graphql-compose";

export const ThreadsEnum = {
  POST: "POST",
  COMMENT: "COMMENT"
}

export const ThreadsETC = schemaComposer.createEnumTC({
  name: 'ThreadsEnum',
  values: {
    POST: { value: ThreadsEnum.POST },
    COMMENT: { value: ThreadsEnum.COMMENT },
  },
});
