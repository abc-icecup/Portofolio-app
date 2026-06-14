import sequelize from "../config/database.js";

import {
  Project,
  ProjectImage,
  ProjectLink,
  ProjectSkill,
} from "../models/index.js";

export const addProject = async (
  req,
  res
) => {

  const transaction =
    await sequelize.transaction();

  try {

    const {
      name,
      description,
      links,
      skills,
    } = req.body;

    if (!name) {
      return res.status(400).json({
        message:
          "Nama project wajib diisi",
      });
    }

    const project =
      await Project.create(
        {
            user_id: req.user.id,
            name,
            description,
        },
        {
            transaction,
        }
      );

    // =====================
    // IMAGES
    // =====================

    if (
      req.files &&
      req.files.length > 0
    ) {

      const images =
        req.files.map((file) => ({
          project_id: project.id,
          image: file.filename,
        }));
    
      console.log(images);
      await ProjectImage.bulkCreate(
        images,
        {
            transaction,
        }
      );
    }

    // =====================
    // LINKS
    // =====================

    if (links) {

      const parsedLinks =
        JSON.parse(links);

      const linkData =
        parsedLinks.map((link) => ({
          project_id: project.id,
          url: link,
        }));

      await ProjectLink.bulkCreate(
        linkData,
        {
            transaction,
        }
      );
    }

    // =====================
    // SKILLS
    // =====================

    if (skills) {

      const parsedSkills =
        JSON.parse(skills);

      const skillData =
        parsedSkills.map(
          (skillId) => ({

            project_id: project.id,

            skill_id: skillId,
          })
        );

      await ProjectSkill.bulkCreate(
        skillData,
        {
            transaction,
        }
      );
    }

    await transaction.commit();

    return res.status(201).json({
      message: "Project berhasil dibuat",
      project,
    });

  } catch (error) {

    await transaction.rollback();

    return res.status(500).json({
      message: error.message,
    });

  }
};