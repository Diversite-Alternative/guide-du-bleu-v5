import { GuideLayout } from '@/components/guide/GuideLayout';
import { GuideSection } from '@/components/guide/GuideSection';
import { GuideCallout } from '@/components/guide/GuideCallout';
import { GuideSteps } from '@/components/guide/GuideSteps';
import { logementGuide } from '@/data/guides/logement';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const LogementGuide = () => {
    const rechercheSteps = [
        {
            title: 'Définissez votre budget',
            description: 'Incluez loyer, charges, assurance habitation et caution. Prévoyez aussi les aides (APL).',
        },
        {
            title: 'Choisissez votre zone',
            description: 'Proche de l\'université, bien desservie par les transports, quartier calme ou animé.',
        },
        {
            title: 'Consultez les plateformes',
            description: 'CROUS, La Carte des Colocs, Leboncoin, PAP, SeLoger, Facebook.',
        },
        {
            title: 'Visitez les logements',
            description: 'Ne jamais payer avant d\'avoir visité ! Vérifiez l\'état, les équipements, le voisinage.',
        },
        {
            title: 'Constituez votre dossier',
            description: 'Préparez tous les documents à l\'avance pour accélérer la location.',
        },
    ];

    return (
        <GuideLayout guide={logementGuide}>
            <GuideSection id="introduction" title="Introduction">
                <p>
                    Trouver un <strong>logement étudiant</strong> en France est souvent un défi, surtout dans les
                    grandes villes. Entre résidences CROUS, colocations et appartements privés, plusieurs options
                    s'offrent à vous.
                </p>

                <GuideCallout type="warning" title="Commencez tôt !">
                    <p>
                        La recherche de logement peut prendre <strong>2 à 3 mois</strong>, surtout pour la rentrée de
                        septembre. Commencez vos démarches dès que possible, idéalement avant votre arrivée.
                    </p>
                </GuideCallout>
            </GuideSection>

            <GuideSection id="types-logement" title="Types de logement">
                <h4 className="font-semibold mb-3">1. Résidences CROUS</h4>
                <p className="text-muted-foreground mb-4">
                    Logements universitaires gérés par le CROUS. <strong>Avantages :</strong> Prix abordables (150-400€/mois),
                    procédures simplifiées, communauté étudiante. <strong>Inconvénients :</strong> Places limitées,
                    confort variable, attribution sur critères sociaux.
                </p>

                <h4 className="font-semibold mb-3">2. Résidences privées</h4>
                <p className="text-muted-foreground mb-4">
                    Résidences étudiantes privées (Studéa, Nexity, Cardinal Campus...). <strong>Avantages :</strong>
                    Confort moderne, services inclus (wifi, ménage...). <strong>Inconvénients :</strong> Plus cher
                    (400-800€/mois), moins de flexibilité.
                </p>

                <h4 className="font-semibold mb-3">3. Colocation</h4>
                <p className="text-muted-foreground mb-4">
                    Partager un appartement avec d'autres étudiants. <strong>Avantages :</strong> Moins cher, convivial,
                    partage des charges. <strong>Inconvénients :</strong> Moins d'intimité, possibles conflits.
                </p>

                <h4 className="font-semibold mb-3">4. Appartement individuel</h4>
                <p className="text-muted-foreground mb-4">
                    Louer un studio ou T1. <strong>Avantages :</strong> Indépendance totale, calme.
                    <strong>Inconvénients :</strong> Plus cher (500-1000€/mois), dossier plus exigeant.
                </p>
            </GuideSection>

            <GuideSection id="crous" title="Résidences CROUS">
                <p>
                    Le <strong>CROUS</strong> (Centre Régional des Œuvres Universitaires et Scolaires) gère des
                    logements étudiants à prix réduits.
                </p>

                <h4 className="font-semibold mt-6 mb-3">Comment postuler ?</h4>
                <ol className="space-y-3">
                    <li>1. Créez un Dossier Social Étudiant (DSE) sur messervices.etudiant.gouv.fr</li>
                    <li>2. Remplissez la demande de logement entre janvier et mai</li>
                    <li>3. Indiquez vos vœux de résidences (jusqu'à 4)</li>
                    <li>4. Attendez la réponse (juin-juillet)</li>
                </ol>

                <GuideCallout type="info" title="Critères d'attribution">
                    <p>
                        Les places sont attribuées selon des <strong>critères sociaux</strong> : revenus familiaux,
                        distance domicile-université, situation familiale. Les étudiants boursiers sont prioritaires.
                    </p>
                </GuideCallout>

                <Button asChild className="mt-6">
                    <a
                        href="https://www.messervices.etudiant.gouv.fr"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Faire une demande CROUS
                        <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                </Button>
            </GuideSection>

            <GuideSection id="recherche" title="Rechercher un logement">
                <p className="mb-6">
                    Si vous ne pouvez pas obtenir un logement CROUS, voici comment chercher par vous-même :
                </p>

                <GuideSteps steps={rechercheSteps} />

                <h4 className="font-semibold mt-8 mb-4">Plateformes recommandées :</h4>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                        <h5 className="font-semibold mb-2">La Carte des Colocs</h5>
                        <p className="text-sm text-muted-foreground mb-3">Colocations entre étudiants</p>
                        <Button asChild variant="outline" size="sm" className="w-full">
                            <a href="https://www.lacartedescolocs.fr" target="_blank" rel="noopener noreferrer">
                                Visiter <ExternalLink className="w-3 h-3 ml-1" />
                            </a>
                        </Button>
                    </div>

                    <div className="p-4 border rounded-lg">
                        <h5 className="font-semibold mb-2">Leboncoin</h5>
                        <p className="text-sm text-muted-foreground mb-3">Petites annonces de particuliers</p>
                        <Button asChild variant="outline" size="sm" className="w-full">
                            <a href="https://www.leboncoin.fr" target="_blank" rel="noopener noreferrer">
                                Visiter <ExternalLink className="w-3 h-3 ml-1" />
                            </a>
                        </Button>
                    </div>

                    <div className="p-4 border rounded-lg">
                        <h5 className="font-semibold mb-2">PAP (De Particulier à Particulier)</h5>
                        <p className="text-sm text-muted-foreground mb-3">Locations sans agence</p>
                        <Button asChild variant="outline" size="sm" className="w-full">
                            <a href="https://www.pap.fr" target="_blank" rel="noopener noreferrer">
                                Visiter <ExternalLink className="w-3 h-3 ml-1" />
                            </a>
                        </Button>
                    </div>

                    <div className="p-4 border rounded-lg">
                        <h5 className="font-semibold mb-2">Facebook</h5>
                        <p className="text-sm text-muted-foreground mb-3">Groupes étudiants locaux</p>
                        <Button asChild variant="outline" size="sm" className="w-full">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                Visiter <ExternalLink className="w-3 h-3 ml-1" />
                            </a>
                        </Button>
                    </div>
                </div>
            </GuideSection>

            <GuideSection id="documents" title="Dossier de location">
                <p>
                    Pour louer un logement en France, vous devez constituer un <strong>dossier de location</strong>
                    complet. Voici les documents généralement demandés :
                </p>

                <h4 className="font-semibold mt-6 mb-3">Documents du locataire :</h4>
                <ul className="space-y-2">
                    <li>• Pièce d'identité (passeport) et titre de séjour ou VLS-TS</li>
                    <li>• Attestation d'inscription universitaire</li>
                    <li>• Justificatifs de ressources (relevés bancaires, attestation de bourse...)</li>
                    <li>• RIB (Relevé d'Identité Bancaire)</li>
                    <li>• Lettre de motivation (parfois demandée)</li>
                </ul>

                <h4 className="font-semibold mt-6 mb-3">Documents du garant :</h4>
                <ul className="space-y-2">
                    <li>• Pièce d'identité</li>
                    <li>• Justificatifs de revenus (3 derniers bulletins de salaire)</li>
                    <li>• Avis d'imposition</li>
                    <li>• Justificatif de domicile</li>
                </ul>

                <GuideCallout type="warning" title="Garant obligatoire">
                    <p>
                        La plupart des propriétaires exigent un <strong>garant</strong> (personne qui s'engage à payer
                        si vous ne payez pas). Si vous n'avez pas de garant en France, utilisez <strong>Visale</strong>
                        (garantie gratuite de l'État).
                    </p>
                </GuideCallout>

                <Button asChild variant="outline" className="mt-6">
                    <a
                        href="https://www.visale.fr"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Demander une garantie Visale
                        <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                </Button>
            </GuideSection>

            <GuideSection id="aides" title="Aides au logement (APL)">
                <p>
                    L'<strong>APL</strong> (Aide Personnalisée au Logement) est une aide de la <strong>CAF</strong>
                    (Caisse d'Allocations Familiales) qui réduit votre loyer.
                </p>

                <h4 className="font-semibold mt-6 mb-3">Montant de l'APL :</h4>
                <p className="text-muted-foreground mb-4">
                    Entre <strong>100€ et 300€ par mois</strong> selon votre loyer, vos revenus et votre ville.
                    Simulation disponible sur caf.fr.
                </p>

                <h4 className="font-semibold mt-6 mb-3">Comment faire la demande ?</h4>
                <ol className="space-y-3">
                    <li>1. Créez un compte sur caf.fr</li>
                    <li>2. Remplissez le formulaire de demande d'APL</li>
                    <li>3. Joignez : bail, RIB, attestation d'inscription, titre de séjour</li>
                    <li>4. L'aide est versée à partir du mois suivant votre demande</li>
                </ol>

                <GuideCallout type="success" title="Délai de carence">
                    <p>
                        L'APL n'est <strong>pas versée le premier mois</strong> de location. Vous commencerez à la
                        recevoir à partir du 2ème mois.
                    </p>
                </GuideCallout>

                <Button asChild className="mt-6">
                    <a
                        href="https://www.caf.fr"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Faire une demande d'APL
                        <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                </Button>
            </GuideSection>

            <GuideSection id="erreurs-courantes" title="Erreurs à éviter">
                <div className="space-y-4">
                    <GuideCallout type="error" title="Payer sans visiter">
                        <p>
                            <strong>Ne payez jamais avant d'avoir visité !</strong> Les arnaques sont fréquentes,
                            surtout sur internet. Insistez pour visiter en personne ou par vidéo.
                        </p>
                    </GuideCallout>

                    <GuideCallout type="error" title="Signer sans lire le bail">
                        <p>
                            Lisez attentivement le bail avant de signer. Vérifiez : durée, montant du loyer et des charges,
                            conditions de résiliation, état des lieux.
                        </p>
                    </GuideCallout>

                    <GuideCallout type="error" title="Oublier l'assurance habitation">
                        <p>
                            L'<strong>assurance habitation</strong> est obligatoire en France. Souscrivez-en une avant
                            d'emménager (environ 30-50€/an).
                        </p>
                    </GuideCallout>

                    <GuideCallout type="error" title="Ne pas faire d'état des lieux">
                        <p>
                            L'<strong>état des lieux d'entrée</strong> est crucial pour récupérer votre caution à la sortie.
                            Notez tous les défauts, prenez des photos.
                        </p>
                    </GuideCallout>
                </div>
            </GuideSection>

            <GuideSection id="faq" title="Questions fréquentes">
                <div className="space-y-6">
                    <div>
                        <h4 className="font-semibold mb-2">Combien coûte un logement étudiant ?</h4>
                        <p className="text-muted-foreground">
                            Cela dépend de la ville. À Paris : 600-1000€/mois. En province : 300-600€/mois.
                            Résidences CROUS : 150-400€/mois.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Qu'est-ce que la caution (dépôt de garantie) ?</h4>
                        <p className="text-muted-foreground">
                            Une somme équivalente à 1 mois de loyer, versée au propriétaire et restituée à la fin du bail
                            si le logement est en bon état.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Puis-je obtenir un logement sans garant ?</h4>
                        <p className="text-muted-foreground">
                            C'est difficile, mais possible avec <strong>Visale</strong>, une garantie gratuite de l'État
                            qui remplace le garant traditionnel.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Combien de temps garde-t-on le logement CROUS ?</h4>
                        <p className="text-muted-foreground">
                            Les contrats CROUS sont renouvelables chaque année tant que vous êtes étudiant.
                            Pensez à renouveler votre demande avant juin.
                        </p>
                    </div>
                </div>
            </GuideSection>
        </GuideLayout>
    );
};

export default LogementGuide;
