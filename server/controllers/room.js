export const createRoom = async (req, res) => {
  //testing resoponse
  res.status(201).json({ success: true, result: { id: 123, title: "test oom" } });
};
