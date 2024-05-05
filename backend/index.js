const express = require("express");
const { todoModel } = require("./db");
const port = 3000;
const app = express();
const cors = require("cors");
const { todoSchema, updateSchema } = require("./types");


app.use(express.json());
app.use(cors());

app.post("/addTodos", async (req, res) => {
	const inputPayload = req.body;
	const parsedPayload = todoSchema.safeParse(inputPayload);

	if (!parsedPayload.success) {
		res.status(411).json({
			msg: "You have provided invalid inputs please cross-check",
		});
    return;
	}

	await todoModel.create({
		title: inputPayload.title,
		description: inputPayload.description,
	});

  res.json({
    msg:"Todo Created"
  })
});


app.get("/getTodos", async (req, res) => {

  const outputPayload = await todoModel.find({});

  res.json({
    outputPayload
  })

});

app.put("/completed",async (req, res) => {
	const updatePayload = req.body;
  const parsedPayload = updateSchema.safeParse(updatePayload);
  if(!parsedPayload.success){
    res.status(411).json({
      msg:"Invalid Inputs"
    })
    return;
  }
  await todoModel.update({
    _id: updatePayload.id,
  },{
    completed: true,
  })

  res.json({
    msg:"Todo marked as done"
  })
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
