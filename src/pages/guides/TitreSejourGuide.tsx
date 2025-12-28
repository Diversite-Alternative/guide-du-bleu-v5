import { GuideLayout } from '@/components/guide/GuideLayout';
import { GuideSection } from '@/components/guide/GuideSection';
import { GuideCallout } from '@/components/guide/GuideCallout';
import { GuideSteps } from '@/components/guide/GuideSteps';
import { titreSejourGuide } from '@/data/guides/titre-sejour';
import { Button } from '@/components/ui/button';
import { ExternalLink, Download } from 'lucide-react';

const TitreSejourGuide = () => {
    const validationSteps = [
        {
            title: 'Créez un compte sur administration-etrangers-en-france.interieur.gouv.fr',
            description: 'Utilisez vos informations personnelles et votre numéro de visa.',
        },
        {
            title: 'Remplissez le formulaire en ligne',
            description: 'Indiquez votre adresse en France, votre université et téléchargez les documents requis.',
        },
        {
            title: 'Payez la taxe de 60€',
            description: 'Le paiement se fait par carte bancaire directement en ligne.',
        },
        {
            title: 'Recevez votre attestation',
            description: 'Vous recevrez une attestation de validation par email sous quelques jours.',
        },
    ];

    const documentsNecessaires = [
        'Passeport avec visa VLS-TS valide',
        'Justificatif de domicile en France (attestation d\'hébergement, bail, etc.)',
        'Attestation d\'inscription universitaire',
        'Photo d\'identité récente',
        'Moyen de paiement (carte bancaire)',
    ];

    return (
        <GuideLayout guide={titreSejourGuide}>
            <GuideSection id="introduction" title="Introduction">
                <p>
                    Le <strong>titre de séjour</strong> est le document officiel qui vous autorise à résider légalement
                    en France pendant vos études. Si vous êtes arrivé avec un <strong>visa long séjour valant titre de
                        séjour (VLS-TS)</strong>, vous devez le valider dans les 3 mois suivant votre arrivée.
                </p>

                <GuideCallout type="warning" title="Important">
                    <p>
                        La validation doit être effectuée dans les <strong>3 mois</strong> suivant votre entrée en France.
                        Passé ce délai, votre visa ne sera plus valide et vous serez en situation irrégulière.
                    </p>
                </GuideCallout>
            </GuideSection>

            <GuideSection id="vls-ts" title="Qu'est-ce que le VLS-TS ?">
                <p>
                    Le VLS-TS (Visa Long Séjour valant Titre de Séjour) est un visa qui fait office de titre de séjour
                    pour la première année. Il combine :
                </p>
                <ul>
                    <li>Un visa d'entrée en France</li>
                    <li>Un titre de séjour temporaire valable 1 an</li>
                </ul>

                <GuideCallout type="info">
                    <p>
                        Une fois validé, votre VLS-TS vous permet de circuler librement dans l'espace Schengen pendant
                        90 jours sur toute période de 180 jours.
                    </p>
                </GuideCallout>
            </GuideSection>

            <GuideSection id="documents" title="Documents nécessaires">
                <p>
                    Pour valider votre VLS-TS, vous aurez besoin des documents suivants :
                </p>
                <ul className="space-y-2">
                    {documentsNecessaires.map((doc) => (
                        <li key={doc} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{doc}</span>
                        </li>
                    ))}
                </ul>

                <Button variant="outline" className="mt-6">
                    <Download className="w-4 h-4 mr-2" />
                    Télécharger la checklist complète
                </Button>
            </GuideSection>

            <GuideSection id="etapes" title="Étapes de validation">
                <p className="mb-6">
                    La validation du VLS-TS se fait entièrement en ligne. Voici les étapes détaillées :
                </p>

                <GuideSteps steps={validationSteps} />

                <Button asChild className="mt-6">
                    <a
                        href="https://administration-etrangers-en-france.interieur.gouv.fr"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Commencer la validation
                        <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                </Button>
            </GuideSection>

            <GuideSection id="renouvellement" title="Renouvellement du titre de séjour">
                <p>
                    Votre titre de séjour doit être renouvelé <strong>2 à 3 mois avant son expiration</strong>.
                    Le renouvellement se fait à la préfecture de votre lieu de résidence.
                </p>

                <GuideCallout type="warning" title="Anticipez !">
                    <p>
                        Les délais de traitement peuvent être très longs (jusqu'à 6 mois dans certaines préfectures).
                        Commencez vos démarches dès que possible.
                    </p>
                </GuideCallout>

                <h4 className="font-semibold mt-6 mb-3">Documents pour le renouvellement :</h4>
                <ul className="space-y-2">
                    <li>• Titre de séjour actuel</li>
                    <li>• Nouvelle attestation d'inscription</li>
                    <li>• Justificatif de domicile récent</li>
                    <li>• 3 photos d'identité</li>
                    <li>• Justificatif de ressources</li>
                </ul>
            </GuideSection>

            <GuideSection id="erreurs-courantes" title="Erreurs à éviter">
                <div className="space-y-4">
                    <GuideCallout type="error" title="Ne pas valider dans les 3 mois">
                        <p>
                            C'est l'erreur la plus fréquente. Si vous dépassez le délai, vous devrez prendre rendez-vous
                            en préfecture, ce qui peut prendre plusieurs mois.
                        </p>
                    </GuideCallout>

                    <GuideCallout type="error" title="Mauvaise adresse">
                        <p>
                            Assurez-vous que l'adresse indiquée correspond à votre lieu de résidence effectif. Un contrôle
                            peut être effectué.
                        </p>
                    </GuideCallout>

                    <GuideCallout type="error" title="Documents illisibles">
                        <p>
                            Scannez vos documents en haute qualité. Des documents illisibles peuvent entraîner un refus.
                        </p>
                    </GuideCallout>
                </div>
            </GuideSection>

            <GuideSection id="faq" title="Questions fréquentes">
                <div className="space-y-6">
                    <div>
                        <h4 className="font-semibold mb-2">Combien coûte la validation ?</h4>
                        <p className="text-muted-foreground">
                            La validation du VLS-TS coûte 60€ (taxe de séjour), payable uniquement par carte bancaire.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Puis-je voyager pendant la validation ?</h4>
                        <p className="text-muted-foreground">
                            Oui, tant que votre VLS-TS n'est pas expiré. Une fois validé, vous recevrez une attestation
                            qui fait office de titre de séjour.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Que faire en cas de problème ?</h4>
                        <p className="text-muted-foreground">
                            Contactez l'OFII ou prenez rendez-vous en préfecture. Ne restez jamais sans titre de séjour valide.
                        </p>
                    </div>
                </div>
            </GuideSection>
        </GuideLayout>
    );
};

export default TitreSejourGuide;
