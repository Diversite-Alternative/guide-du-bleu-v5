import { GuideLayout } from '@/components/guide/GuideLayout';
import { GuideSection } from '@/components/guide/GuideSection';
import { GuideCallout } from '@/components/guide/GuideCallout';
import { GuideSteps } from '@/components/guide/GuideSteps';
import { securiteSocialeGuide } from '@/data/guides/securite-sociale';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const SecuriteSocialeGuide = () => {
    const inscriptionSteps = [
        {
            title: 'Créez un compte sur Ameli.fr',
            description: 'Rendez-vous sur ameli.fr et cliquez sur "Créer un compte".',
        },
        {
            title: 'Renseignez vos informations',
            description: 'Numéro de sécurité sociale provisoire (fourni par votre université), état civil, adresse.',
        },
        {
            title: 'Joignez les documents',
            description: 'Attestation d\'inscription, titre de séjour ou VLS-TS, RIB, photo.',
        },
        {
            title: 'Validez votre inscription',
            description: 'Vous recevrez un email de confirmation sous quelques jours.',
        },
    ];

    return (
        <GuideLayout guide={securiteSocialeGuide}>
            <GuideSection id="introduction" title="Introduction">
                <p>
                    La <strong>sécurité sociale</strong> est le système d'assurance maladie français qui vous permet
                    d'être remboursé pour vos soins médicaux. En tant qu'étudiant international, vous y avez droit
                    gratuitement dès votre inscription dans un établissement d'enseignement supérieur.
                </p>

                <GuideCallout type="success" title="Bonne nouvelle !">
                    <p>
                        Depuis 2019, l'inscription à la sécurité sociale est <strong>gratuite et automatique</strong> pour
                        tous les étudiants. Vous n'avez plus besoin de payer la CVEC (Contribution Vie Étudiante et de Campus).
                    </p>
                </GuideCallout>
            </GuideSection>

            <GuideSection id="inscription" title="Inscription sur Ameli">
                <p>
                    Même si votre inscription est automatique, vous devez créer un compte sur <strong>Ameli.fr</strong>
                    pour gérer vos remboursements et télécharger vos attestations.
                </p>

                <GuideSteps steps={inscriptionSteps} />

                <Button asChild className="mt-6">
                    <a
                        href="https://www.ameli.fr"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        S'inscrire sur Ameli.fr
                        <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                </Button>
            </GuideSection>

            <GuideSection id="documents" title="Documents nécessaires">
                <p>Pour finaliser votre inscription, vous aurez besoin de :</p>
                <ul className="space-y-2 mt-4">
                    <li>• <strong>Attestation d'inscription universitaire</strong> (certificat de scolarité)</li>
                    <li>• <strong>Titre de séjour</strong> ou VLS-TS validé</li>
                    <li>• <strong>Justificatif de domicile</strong> en France</li>
                    <li>• <strong>RIB</strong> (Relevé d'Identité Bancaire)</li>
                    <li>• <strong>Photo d'identité</strong> récente</li>
                    <li>• <strong>Passeport</strong></li>
                </ul>

                <GuideCallout type="info" title="Numéro de sécurité sociale provisoire">
                    <p>
                        Votre université vous fournira un numéro de sécurité sociale provisoire. Il commence généralement
                        par 1 ou 2, suivi de votre année de naissance.
                    </p>
                </GuideCallout>
            </GuideSection>

            <GuideSection id="carte-vitale" title="Obtenir sa carte Vitale">
                <p>
                    La <strong>carte Vitale</strong> est votre carte d'assurance maladie. Elle facilite vos remboursements
                    et évite d'avancer les frais médicaux.
                </p>

                <h4 className="font-semibold mt-6 mb-3">Comment l'obtenir ?</h4>
                <ol className="space-y-3">
                    <li>1. Finalisez votre inscription sur Ameli.fr</li>
                    <li>2. Attendez de recevoir votre numéro de sécurité sociale définitif (2-3 semaines)</li>
                    <li>3. Faites une demande de carte Vitale sur Ameli.fr</li>
                    <li>4. Recevez votre carte par courrier (4-6 semaines)</li>
                </ol>

                <GuideCallout type="warning" title="Délais">
                    <p>
                        La carte Vitale peut prendre <strong>jusqu'à 2-3 mois</strong> pour arriver. En attendant, conservez
                        vos attestations de droits que vous pouvez télécharger sur Ameli.fr.
                    </p>
                </GuideCallout>
            </GuideSection>

            <GuideSection id="mutuelle" title="Choisir une mutuelle">
                <p>
                    La sécurité sociale rembourse <strong>70% des frais médicaux</strong>. Une <strong>mutuelle</strong>
                    (complémentaire santé) peut prendre en charge les 30% restants.
                </p>

                <h4 className="font-semibold mt-6 mb-3">Est-ce obligatoire ?</h4>
                <p className="text-muted-foreground mb-4">
                    Non, mais fortement recommandé, surtout si vous avez des lunettes, des soins dentaires, ou si vous
                    voyez régulièrement un médecin.
                </p>

                <h4 className="font-semibold mt-6 mb-3">Mutuelles étudiantes populaires :</h4>
                <ul className="space-y-2">
                    <li>• <strong>LMDE</strong> (La Mutuelle Des Étudiants)</li>
                    <li>• <strong>SMENO</strong></li>
                    <li>• <strong>MEP</strong> (Mutuelle des Étudiants de Provence)</li>
                    <li>• <strong>Heyme</strong></li>
                </ul>

                <GuideCallout type="info">
                    <p>
                        Comparez les offres et les tarifs. Certaines mutuelles proposent des tarifs préférentiels pour
                        les étudiants internationaux.
                    </p>
                </GuideCallout>
            </GuideSection>

            <GuideSection id="medecin-traitant" title="Déclarer un médecin traitant">
                <p>
                    Un <strong>médecin traitant</strong> est un médecin généraliste que vous choisissez comme référent.
                    Ce n'est pas obligatoire, mais cela vous permet d'être mieux remboursé.
                </p>

                <h4 className="font-semibold mt-6 mb-3">Comment déclarer un médecin traitant ?</h4>
                <ol className="space-y-3">
                    <li>1. Trouvez un médecin (sur Doctolib, Ameli.fr, ou recommandation)</li>
                    <li>2. Prenez rendez-vous</li>
                    <li>3. Lors de la consultation, demandez à le déclarer comme médecin traitant</li>
                    <li>4. Signez ensemble le formulaire de déclaration</li>
                    <li>5. Le médecin envoie le formulaire à la sécurité sociale</li>
                </ol>

                <Button asChild variant="outline" className="mt-6">
                    <a
                        href="https://www.doctolib.fr"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Trouver un médecin sur Doctolib
                        <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                </Button>
            </GuideSection>

            <GuideSection id="faq" title="Questions fréquentes">
                <div className="space-y-6">
                    <div>
                        <h4 className="font-semibold mb-2">Combien coûte l'inscription à la sécurité sociale ?</h4>
                        <p className="text-muted-foreground">
                            <strong>C'est gratuit !</strong> Depuis 2019, l'inscription est automatique et sans frais.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Quand vais-je recevoir ma carte Vitale ?</h4>
                        <p className="text-muted-foreground">
                            Comptez 2 à 3 mois après votre inscription. En attendant, utilisez votre attestation de droits.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Puis-je me faire soigner sans carte Vitale ?</h4>
                        <p className="text-muted-foreground">
                            Oui ! Montrez votre attestation de droits (disponible sur Ameli.fr). Vous devrez peut-être
                            avancer les frais et demander un remboursement.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Ai-je besoin d'une mutuelle ?</h4>
                        <p className="text-muted-foreground">
                            Ce n'est pas obligatoire, mais recommandé si vous portez des lunettes, allez chez le dentiste,
                            ou avez des frais médicaux réguliers.
                        </p>
                    </div>
                </div>
            </GuideSection>
        </GuideLayout>
    );
};

export default SecuriteSocialeGuide;
