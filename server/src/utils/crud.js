const getOne = model => async (req,res) => {
    const id =  req.params.id;
    
    const doc = await model.findOne({_id: id})
    if(!doc) return res.status(404).send({message : "Not found !"})
    res.status(200).json({data : doc})
}

const getMany = model => async (req,res) => {
    const doc = await model.find({})
        if(!doc) return res.status(404).send({message : "Not found !"})
        return res.status(200).json({data : doc})    
}

const removeOne = model => async(req,res) => {
    const doc = await model.findOneAndRemove({_id : req.params.id})
    if(!doc) return res.status(404).send({message : "Not found !"})
    return res.status(200).json({data : doc}) 
}

const updateOne = model => async(req,res) => {
    const doc = await model.findOneAndUpdate(
    { _id: req.params.id, createdBy: req.user._id },
    req.body,
    { new: true }
    )

    if(!doc) return res.status(404).send({message : "Not found !"})
    return res.status(200).json({data : doc}) 
}

const createOne = model => async(req,res) => {
    const doc = await model.create(req.body)
    res.status(201).json({ data: doc })
}

const crudController = (model) => ({
    getOne: getOne(model),
    getMany: getMany(model),
    removeOne: removeOne(model),
    updateOne: updateOne(model),
    createOne: createOne(model)
})