const siteVisitModel = require("../models/siteVisitModel");

// ===================================
// Get All Site Visits
// ===================================

const getAllSiteVisits = (req, res) => {

  siteVisitModel.getAllSiteVisits((err, rows) => {

    if (err) {

      console.error(err);

      return res.status(500).json({
        success: false,
        message: "Failed to fetch site visits.",
      });

    }

    res.json({
      success: true,
      data: rows,
    });

  });

};

// ===================================
// Get Site Visit By ID
// ===================================

const getSiteVisitById = (req, res) => {

  const { id } = req.params;

  siteVisitModel.getSiteVisitById(id, (err, row) => {

    if (err) {

      console.error(err);

      return res.status(500).json({
        success: false,
        message: "Failed to fetch site visit.",
      });

    }

    res.json({
      success: true,
      data: row,
    });

  });

};

// ===================================
// Create Site Visit
// ===================================

const createSiteVisit = (req, res) => {

  siteVisitModel.createSiteVisit(req.body, function (err) {

    if (err) {

      console.error(err);

      return res.status(500).json({
        success: false,
        message: "Failed to create site visit.",
      });

    }

    res.status(201).json({
      success: true,
      message: "Site Visit Created Successfully",
      id: this.lastID,
    });

  });

};

// ===================================
// Update Site Visit
// ===================================

const updateSiteVisit = (req, res) => {

  const { id } = req.params;

  siteVisitModel.updateSiteVisit(
    id,
    req.body,
    function (err) {

      if (err) {

        console.error(err);

        return res.status(500).json({
          success: false,
          message: "Failed to update site visit.",
        });

      }

      res.json({
        success: true,
        message: "Site Visit Updated Successfully",
      });

    }
  );

};

// ===================================
// Delete Site Visit
// ===================================

const deleteSiteVisit = (req, res) => {

  const { id } = req.params;

  siteVisitModel.deleteSiteVisit(id, function (err) {

    if (err) {

      console.error(err);

      return res.status(500).json({
        success: false,
        message: "Failed to delete site visit.",
      });

    }

    res.json({
      success: true,
      message: "Site Visit Deleted Successfully",
    });

  });

};

module.exports = {

  getAllSiteVisits,
  getSiteVisitById,
  createSiteVisit,
  updateSiteVisit,
  deleteSiteVisit,

};