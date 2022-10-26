const Anime = require("../models/animeModel");
const animeController = {};

animeController.getList = async(req, res) => {
    Anime.find({}).then(animes => {
        res.json(animes)
    }).catch(err => {
        res.json(err)
    })
}

animeController.getOrder = async (req, res) => {
    const title = req.params.title;
    Anime.find({ title: title })
        .then((data) => {
        if (data.length == 0) {
            Anime.find({ alternative_title: title })
                .then((anime) => {
                res.json(anime);
            })
                .catch((err) => {
                res.json(err);
            });
        }
        else {
            res.send(data);
        }
    })
        .catch((err) => {
        res.send(err);
    });
};

animeController.addOrder = async (req, res) => {
    const { title, order, alternative_title } = req.body;
    const newAnimeOrder = new Anime({
        title,
        order,
        alternative_title
    });
    newAnimeOrder
        .save()
        .then((anime) => {
        res.json(anime);
    })
        .catch((err) => {
        res.json(err);
    });
};

module.exports = animeController;