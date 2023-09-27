const getQuotes = (req,res) => {
    if(!req.body.quote || !req.body.author){
        res.status(400)
        throw new Error('Please add all fields')
    }
    res.status(200).json({message: 'get quotes'})
}

const createQuotes = (req,res) => {
    res.status(200).json({message: 'Create quotes'})
}

const updateQuotes = (req,res) => {
    res.status(200).json({message: 'Update quotes'})
}

const deleteQuotes = (req,res) => {
    res.status(200).json({message: 'Delete quotes'})
}
module.exports = {
    getQuotes,
    createQuotes,
    updateQuotes,
    deleteQuotes
}