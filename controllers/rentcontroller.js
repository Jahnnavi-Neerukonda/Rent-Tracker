const Rents=require("../models/rents");

exports.getrents=async (req, res, next) => {
     try {
        const filter = {};

        if (req.query.type) {
            filter.type = req.query.type;
        }

        let query = Rents.find(filter);

        if (req.query.sort === "rents") {
            query = query.sort({ rent: 1 });
        }

        const rents = await query;

        res.status(200).json(rents);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

exports.postrents= async (req, res, next) => {
    console.log("Request body:", req.body);
    const {tenant, rent, type,paid, dueDate} = req.body;

    if (!tenant) {
        return res.status(400).json({
            message: "Tenant name not found" })
    }
    if (!rent) {  return res.status(400).json({
            message: "Rent amount not found"  })
    }
     if (!type) {  return res.status(400).json({
            message: "Type not found"  })
    }
     if (!paid) {  return res.status(400).json({
            message: "Paid status not found"  })
    }
     if (!dueDate) {  return res.status(400).json({
            message: "Due date not found"  })
    }

    const rents = new Rents({tenant, rent, type, paid, dueDate});
    await rents.save();

    return res.status(201).json(rents);
};
exports.getrent=async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                message: "Invalid id"
            });
        }

        const rent = await Rents.findById(id);

        if (!rent) {
            return res.status(404).json({
                message: "Rent not found"
            });
        }

        res.status(200).json(rent);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

exports.putrents=async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                message: "Invalid id"
            });
        }

        const rent = await Rents.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!rent) {
            return res.status(404).json({
                message: "Rent not found"
            });
        }

        res.status(200).json(rent);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};
exports.deleterents=async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                message: "Invalid id"
            });
        }

        const rent = await Rents.findByIdAndDelete(id);

        if (!rent) {
            return res.status(404).json({
                message: "Rent not found"
            });
        }

        res.status(200).json({
            message: "Rent deleted successfully",
            rent
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}