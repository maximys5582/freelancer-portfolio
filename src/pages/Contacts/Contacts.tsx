const Contacts = () => {
  return (
    <>
      <div className="section">
        <div className="container">
          <h1 className="title-1">Contacts</h1>

          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Location</h2>
              <p>Russia, Rostov-on-Don</p>
            </li>

            <li className="content-list__item">
              <h2 className="title-2">Telegram / WhatsApp</h2>
              <p>
                <a href="tel:+79910847548">+7 (991) 084-75-48</a>
              </p>
            </li>

            <li className="content-list__item">
              <h2 className="title-2">Email</h2>
              <p>
                <a href="mailto:dadqwe97@gmail.com">dadqwe97@gmail.com</a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Contacts
