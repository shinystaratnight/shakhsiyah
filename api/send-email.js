const mail = require('@sendgrid/mail');
mail.setApiKey(process.env.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);

export default function handler(req, res) {
  try {
    const message = {
      from: process.env.SENDGRID_AUTHORIZED_EMAIL,
    };

    const body = req.body;

    const content = `<div>
      <p><strong>Name: </strong>${body.name}</p>
      <p><strong>Email: </strong>${body.email}</p>
      <p><strong>${body.school ? 'School name: ' : 'Subject: '}</strong>${
      body.school ? body.school : body.subject
    }</p>
      <p><strong>Message: </strong><br/>${body.message}</p>
    </div>`;

    if (body) {
      message.to = 'shams@securiwiser.com';
      message.subject = body.title;
      message.html = content;
    }

    mail.send(message).then(
      () => {
        res.status(200).json({
          message: 'Email sent successfully!',
        });
      },
      (error) => {
        console.error(error);
        if (error.response) {
          return res.status(500).json({
            error: error.response,
          });
        }
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'There was an error', error: err });
  }
}