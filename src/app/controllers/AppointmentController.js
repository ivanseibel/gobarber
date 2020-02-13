import * as Yup from 'yup';

import User from '../models/User';
import Appointment from '../models/Appointment';

class AppointmentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      provider_id: Yup.number().integer().strict().required(),
      date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { provider_id, date } = req.body;

    const isProvider = await User.findOne({
      where: {
        provider: true,
        id: provider_id,
      },
    });

    if (!isProvider) {
      return res.status(404).json({ error: 'You can only create appointments to providers' });
    }

    const newAppointment = await Appointment.create({
      user_id: req.user_id,
      provider_id,
      date,
    });

    return res.json(newAppointment);
  }
}

export default new AppointmentController();
