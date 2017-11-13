import React from 'react';
import NewWebApp from '../../images/new-web-app.png';
import ToFtp from '../../images/to-ftp.png';
import ReadyWebsite from '../../images/ready-website.png';

export default class Thanks extends React.Component {
	render() {
		return <section className="wrap-content">
			<h2>Dzięki za wysłuchanie!</h2>
			<p>Było mi niezmiernie miło wprowadzić Was do świata chmury publicznej. Liczę, że wyciągnęliście z tej prezentacji ile to możliwe. Dla przypomnienia poniżej podsumowanie najważniejszych rzeczy z prezentacji. Niżej znajedziecie też linki do materiałów z sieci, które pomogą Wam zacząć z chmurą publiczną.</p>
			<p>Cześć!</p>
			<p>Kuba</p>
			<h3>Podsumowanie prezentacji</h3>
			<ul>
				<li>Umiejętność korzystania z chmury publicznej, wśród programistów, jest często mile widziana przez pracodawców. Korzysta z niej wiele firm w naszym regionie i na całym świecie. Chmura publiczna dostarczana jest przez m. in. Microsoft, Google, Amazon. Niezależnie od "gałęzi" programowania, który Cię interesuje - znajomość chmury publicznej zawsze będzie przydatna.</li>
				<li>Zrobienie pierwszego kroku do nabycia tego skilla jest bardzo proste. Aby zacząć wystarczy prosta stronka jak ta i przejście 3 szybkich kroków:
					<div className="row centered">
						<div className="col-md-4 col-md-offset-4">
							<div className="thumbnail">
								<img src={NewWebApp} alt="New Web App" />
								<div className="caption">
								<p>Tworzymy nową stronę na Azure</p>
							</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4 col-md-offset-4">
							<div className="thumbnail">
								<img src={ToFtp} alt="To Ftp" />
								<div className="caption">
								<p>Wrzucamy na FTP</p>
							</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4 col-md-offset-4">
							<div className="thumbnail">
								<img src={ReadyWebsite} alt="Strona Gotowa" />
								<div className="caption">
								<p>Strona gotowa</p>
							</div>
							</div>
						</div>
					</div>
				</li>
				<li>Pamiętacie jak mówiłem Wam, że chmura oszczedzi Wam masę czasu? Wiadomo, że my programiści wolimy programować, a nie konfigurować i użerać się z infrastrukturą. Chmura publiczna to usługa, która po prostu działa, a jak nie działa to nie Twój problem. Wypróbuj przy swoim nastepnym projekcie zaliczeniowym i zobacz jak łątwiej i szybciej się tworzy aplikacje.</li>
			</ul>
		</section>
	}
}