import { startOfDay, endOfDay, parseISO } from 'date-fns';
import { Op } from 'sequelize';

import Appointments from '../models/Appointment';
import User from '../models/User';

class ScheduleController {
  async index(req, res) {
    const userIsProvider = await User.findOne({
      where: {
        provider: true,
        id: req.userId,
      },
    });

    if (!userIsProvider) {
      return res.status(401).json({ error: 'User must be a provider' });
    }

    const { date } = req.query; // TODO Implement date interval query
    const parsedDate = parseISO(date);

    const schedule = await Appointments.findAll({
      where: {
        provider_id: req.userId,
        canceled_at: null,
        date: {
          [Op.between]: [startOfDay(parsedDate), endOfDay(parsedDate)],
        },
      },
      order: ['date'],
    });

    return res.json(schedule);
  }
}

export default new ScheduleController();
