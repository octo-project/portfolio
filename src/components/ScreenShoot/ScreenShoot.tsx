import "./style.css";
import { FC, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useLocalFormatHook } from "../../common/hooks/localFormatHook";
import { useProjectConstant } from "../../constant/projectListConstant";

// Buyer
import FAQ from "../../assets/Buyer Persona/FAQ.webp";
import Avis from "../../assets/Buyer Persona/Avis.webp";
import About from "../../assets/Buyer Persona/About.webp";
import Welcome from "../../assets/Buyer Persona/Welcome.webp";
import Setting from "../../assets/Buyer Persona/Setting.webp";
import Loading from "../../assets/Buyer Persona/Loading.webp";
import Generator from "../../assets/Buyer Persona/Generator.webp";
import GeneratedFile from "../../assets/Buyer Persona/generated-file.png";
import SuccessGenerate from "../../assets/Buyer Persona/SuccessGenerate.webp";
import SuccessDownload from "../../assets/Buyer Persona/SuccessDownload.webp";
// Gestion de fond
import expense_tracking_home from "../../assets/GestionDeFond/home.webp";
import expense_tracking_expenses from "../../assets/GestionDeFond/expenses.webp";
import expense_tracking_finance_home from "../../assets/GestionDeFond/finance-home.webp";
import expense_tracking_new_buy_plan from "../../assets/GestionDeFond/new-buy-plan.webp";
import expense_tracking_delete_expense from "../../assets/GestionDeFond/delete-expense.webp";
import expense_tracking_select_plan_detail from "../../assets/GestionDeFond/plan-detail.webp";
import expense_tracking_select_plan_type from "../../assets/GestionDeFond/select-plan-type.webp";
import expense_tracking_new_selling_goal from "../../assets/GestionDeFond/new-selling-goal.webp";
import expense_tracking_expense_details_2 from "../../assets/GestionDeFond/expense-details-2.webp";
import expense_tracking_delete_finance_goal from "../../assets/GestionDeFond/delete-finance-goal.webp";
import expense_tracking_finance_sold_detail from "../../assets/GestionDeFond/finance-sold-detail.webp";
import expense_tracking_creation_new_expense from "../../assets/GestionDeFond/creation-new-expense.webp";
import expense_tracking_expense_chart_details from "../../assets/GestionDeFond/expense-chart-details.webp";
import expense_tracking_creation_expense_1 from "../../assets/GestionDeFond/creation-new-expense-amount.webp";
import expense_tracking_expense_category_filters from "../../assets/GestionDeFond/expense-category-filters.webp";
// Vatsy
import vatsy_page_1 from "../../assets/Vatsy/page_1.webp";
import vatsy_addition from "../../assets/Vatsy/addition.webp";
import vatsy_liste_soupe from "../../assets/Vatsy/liste_soupe.webp";
import vatsy_date_filter from "../../assets/Vatsy/date_filter.webp";
import vatsy_see_invoice from "../../assets/Vatsy/see_invoice.webp";
import vatsy_table_filter from "../../assets/Vatsy/table_filter.webp";
import vatsy_ask_password from "../../assets/Vatsy/ask_password.webp";
import vatsy_bol_renverser from "../../assets/Vatsy/bol_renverser.webp";
import vatsy_purchase_filter from "../../assets/Vatsy/purchase_filter.webp";
import vatsy_selection_quantity from "../../assets/Vatsy/selection_quantity.webp";
import vatsy_category_de_depense from "../../assets/Vatsy/category_de_depense.webp";
import vatsy_historique_de_vente from "../../assets/Vatsy/historique_de_vente.webp";
import vatsy_historique_de_depense from "../../assets/Vatsy/historique_de_depense.webp";
// Portfolio
import portfolio_home from "../../assets/Portfolio Design V2/home.webp";
import portfolio_vatsy from "../../assets/Portfolio Design V2/vatsy.webp";
import portfolio_buyer from "../../assets/Portfolio Design V2/buyer.webp";
import portfolio_projects from "../../assets/Portfolio Design V2/projects.webp";
import portfolio_vatsy_screen from "../../assets/Portfolio Design V2/vatsy-screen.webp";
import portfolio_buyer_screen from "../../assets/Portfolio Design V2/buyer-screen.webp";
import { PictureModal } from "../Modal";

const ScreenShoot: FC = () => {
    const { Projects } = useProjectConstant();
    const { formatText } = useLocalFormatHook();

    const params = useParams();
    const search = new URLSearchParams(params);
    const projectName = search.get("name") || null;

    const currentProject = Projects.find(
        (el) => el.name.toLowerCase() === projectName?.toLowerCase(),
    );
    const logo = currentProject ? currentProject?.logo : undefined;

    console.log("projectrName = ", projectName);
    const [setOfImages, setSetOfImages] = useState<any[]>([]);
    const [openPictureModal, setOpenPictureModal] = useState<boolean>(false);
    const [selectedPicture, setSelectedPicture] = useState<string|null>(null);

    const sortArrayTheClickedElementPassFirst = (data: any[], el: string) => {
        const res = data.sort((a, b ) => a === el ? -1 : b === el ? 1 : 0);
        return res
    }

    const handleSeeImage = (imageSrc: string, projectName: string) => {
        setSelectedPicture(imageSrc)
        setOpenPictureModal(true)
        switch (projectName) {
            case "buyer" :
                setSetOfImages(sortArrayTheClickedElementPassFirst([FAQ, Avis, About, Welcome, Setting, Loading, Generator, GeneratedFile, SuccessGenerate, SuccessDownload ],imageSrc))
                break;
            case "gestion-fond" :
                setSetOfImages(sortArrayTheClickedElementPassFirst([expense_tracking_home, expense_tracking_expenses, expense_tracking_finance_home, expense_tracking_new_buy_plan, expense_tracking_delete_expense, expense_tracking_select_plan_detail, expense_tracking_select_plan_type, expense_tracking_new_selling_goal, expense_tracking_delete_finance_goal, expense_tracking_finance_sold_detail, expense_tracking_creation_new_expense, expense_tracking_expense_chart_details, expense_tracking_creation_expense_1, expense_tracking_expense_category_filters, expense_tracking_expense_details_2], imageSrc))
                break;
            case "vatsy" :
                setSetOfImages(sortArrayTheClickedElementPassFirst([vatsy_page_1, vatsy_addition, vatsy_liste_soupe, vatsy_date_filter, vatsy_see_invoice, vatsy_table_filter, vatsy_ask_password, vatsy_bol_renverser,  vatsy_purchase_filter, vatsy_selection_quantity, vatsy_category_de_depense, vatsy_historique_de_vente, vatsy_historique_de_depense],imageSrc))
                break;
            case "portfolio" :
                setSetOfImages(sortArrayTheClickedElementPassFirst([portfolio_home, portfolio_vatsy, portfolio_buyer, portfolio_projects, portfolio_vatsy_screen, portfolio_buyer_screen],imageSrc))
                break;
            default:
                break;
        }
    }

    const handleCloseModalPicture = () => setOpenPictureModal(false);

    const moveImage = (direction: string) => {
        if(selectedPicture) {
            const indexOfPicture = setOfImages.findIndex((el) => el === selectedPicture)
            const maxIndex = setOfImages.length - 1;

            const newIndex = direction === "right" ? indexOfPicture + 1 : indexOfPicture - 1;
            
            const correctIndex = newIndex < 0 ? maxIndex : newIndex > maxIndex ? 0 : newIndex;
            console.log("correct index : ", correctIndex);
            
            setSelectedPicture(setOfImages[correctIndex])
        }
    }

    return  (
        <div className="containerProject">
            <h3 className="containerProjectTitle">
                <Link to="/projects" style={{ textDecoration: "none", fontSize: 18 }}>
                    {formatText("projects").toUpperCase()}
                </Link>
                {projectName && (
                <Link to={{pathname: currentProject?.link, state: currentProject}}>
                    <span
                        style={{
                            fontWeight: "normal",
                            position: "relative",
                            letterSpacing: "2px",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "end",
                        }}
                    >
                        <span>/</span>
                        {logo && (
                            <img
                                src={logo}
                                loading="lazy"
                                alt="project"
                                style={{
                                    marginLeft: "3px",
                                    left: 8,
                                    top: -3,
                                    position: "absolute",
                                    width: 38,
                                }}
                            />
                        )}
                        <span
                            className="projectTitle"
                            style={{ marginLeft: logo ? "44px" : "10px" }}
                        >
                            {` ${projectName}`}
                        </span>
                    </span>
                </Link>
                )}
            </h3>
            <div className="projectDetail-screenshoot">
                <div className="screenShootWeb buyer-persona-grid" style={{display: projectName === "buyer" ? 'grid' : 'none'}}>
                    <img src={FAQ} alt="FAQ Buyer persona" loading="lazy" width={200} onClick={()=> handleSeeImage(FAQ, "buyer")} className="animate-up buyer-img " />
                    <img src={Avis} alt="Avis Buyer persona" loading="lazy"  width={200} onClick={()=> handleSeeImage(Avis, "buyer")} className="animate-up buyer-img"/>
                    <img src={About} alt="About Buyer persona" loading="lazy"  width={200} onClick={()=> handleSeeImage(About, "buyer")} className="animate-up buyer-img"/>
                    <img src={Welcome} alt="Welcome Buyer persona" loading="lazy"  width={200} onClick={()=> handleSeeImage(Welcome, "buyer")} className="animate-up buyer-img"/>
                    <img src={Setting} alt="Setting Buyer persona" loading="lazy"  width={200} onClick={()=> handleSeeImage(Setting, "buyer")} className="animate-up buyer-img"/>
                    <img src={Loading} alt="Loading Buyer persona" loading="lazy" width={200} onClick={()=> handleSeeImage(Loading, "buyer")} className="animate-up buyer-img" />
                    <img src={Generator} alt="Generator Buyer persona" loading="lazy" width={200} onClick={()=> handleSeeImage(Generator, "buyer")} className="animate-up buyer-img" />
                    <img src={GeneratedFile} alt="GeneratedFile Buyer persona" loading="lazy"  width={200} onClick={()=> handleSeeImage(GeneratedFile, "buyer")} className="animate-up buyer-img"/>
                    <img src={SuccessGenerate} alt="SuccessGenerate Buyer persona" loading="lazy" width={200} onClick={()=> handleSeeImage(SuccessGenerate, "buyer")} className="animate-up buyer-img" />
                    <img src={SuccessDownload} alt="SuccessDownload Buyer persona" loading="lazy"  width={200} onClick={()=> handleSeeImage(SuccessDownload, "buyer")} className="animate-up buyer-img"/>
                </div>
                <div className="screenShootWeb vatsy-grid" style={{display: projectName === "gestion-fond" ? 'grid' : 'none'}}>
                    <img src={expense_tracking_home} alt="home gestion de fond" width={300} onClick={()=> handleSeeImage(expense_tracking_home, "gestion-fond")}  className="animate-up"/>
                    <img src={expense_tracking_expenses} alt="expenses gestion de fond" width={300} onClick={()=> handleSeeImage(expense_tracking_expenses, "gestion-fond")} className="animate-up"/>
                    <img src={expense_tracking_finance_home} alt="finance home gestion de fond"  width={300} onClick={()=> handleSeeImage(expense_tracking_finance_home, "gestion-fond")} className="animate-up"/>
                    <img src={expense_tracking_new_buy_plan} alt="buy plan gestion de fond"  width={300} onClick={()=> handleSeeImage(expense_tracking_new_buy_plan, "gestion-fond")} className="animate-up"/>
                    <img src={expense_tracking_delete_expense} alt="delete expense gestion de fond"  width={300} onClick={()=> handleSeeImage(expense_tracking_delete_expense, "gestion-fond")} className="animate-up"/>
                    <img src={expense_tracking_select_plan_detail} alt="plan detail gestion de fond"  width={300} onClick={()=> handleSeeImage(expense_tracking_select_plan_detail, "gestion-fond")} className="animate-up"/>
                    <img src={expense_tracking_select_plan_type} alt="plan type gestion de fond"  width={300} onClick={()=> handleSeeImage(expense_tracking_select_plan_type, "gestion-fond")} className="animate-up"/>
                    <img src={expense_tracking_new_selling_goal} alt="selling goal gestion de fond"  width={300} onClick={()=> handleSeeImage(expense_tracking_new_selling_goal, "gestion-fond")} className="animate-up"/>
                    <img src={expense_tracking_delete_finance_goal} alt="delete finance goal gestion de fond"  width={300} onClick={()=> handleSeeImage(expense_tracking_delete_finance_goal, "gestion-fond")} className="animate-up"/>
                    <img src={expense_tracking_finance_sold_detail} alt="finance sold detail - gestion de fond"  width={300} onClick={()=> handleSeeImage(expense_tracking_finance_sold_detail, "gestion-fond")} className="animate-up"/>
                    <img src={expense_tracking_creation_new_expense} alt="new expense - gestion de fond"  width={300} onClick={()=> handleSeeImage(expense_tracking_creation_new_expense, "gestion-fond")} className="animate-up"/>
                    <img src={expense_tracking_expense_chart_details} alt="chart details - gestion de fond"  width={300} onClick={()=> handleSeeImage(expense_tracking_expense_chart_details, "gestion-fond")} className="animate-up"/>
                    <img src={expense_tracking_creation_expense_1} alt="creation expense - gestion de fond" width={300} onClick={()=> handleSeeImage(expense_tracking_creation_expense_1, "gestion-fond")} className="animate-up" />
                    <img src={expense_tracking_expense_category_filters} alt="category filters - gestion de fond"  width={300} onClick={()=> handleSeeImage(expense_tracking_expense_category_filters, "gestion-fond")} className="animate-up"/>
                    <img src={expense_tracking_expense_details_2} alt="detail - gestion de fond"  width={300} onClick={()=> handleSeeImage(expense_tracking_expense_details_2, "gestion-fond")} className="animate-up"/>   
                </div>
                <div className="screenShootWeb vatsy-grid" style={{display: projectName === "vatsy" ? 'grid' : 'none'}}>
                    <img src={vatsy_page_1} alt="page 1 - vatsy" width={300} onClick={()=> handleSeeImage(vatsy_page_1, "vatsy")} className="animate-up"/>
                    <img src={vatsy_addition} alt="addition - vatsy" width={300} onClick={()=> handleSeeImage(vatsy_addition, "vatsy")}  className="animate-up"/>
                    <img src={vatsy_liste_soupe} alt="liste soupe - vatsy" width={300} onClick={()=> handleSeeImage(vatsy_liste_soupe, "vatsy")} className="animate-up"/>
                    <img src={vatsy_date_filter} alt="date filter - vatsy" width={300} onClick={()=> handleSeeImage(vatsy_date_filter, "vatsy")} className="animate-up"/>
                    <img src={vatsy_see_invoice} alt="invoice - vatsy" width={300} onClick={()=> handleSeeImage(vatsy_see_invoice, "vatsy")} className="animate-up"/>
                    <img src={vatsy_table_filter} alt="table filter - vatsy" width={300} onClick={()=> handleSeeImage(vatsy_table_filter, "vatsy")} className="animate-up"/>
                    <img src={vatsy_ask_password} alt="password - vatsy" width={300} onClick={()=> handleSeeImage(vatsy_ask_password, "vatsy")} className="animate-up"/>
                    <img src={vatsy_bol_renverser} alt="bol - vatsy" width={300} onClick={()=> handleSeeImage(vatsy_bol_renverser, "vatsy")} className="animate-up"/>
                    <img src={vatsy_purchase_filter} alt="purchase - vatsy" width={300} onClick={()=> handleSeeImage(vatsy_purchase_filter, "vatsy")} className="animate-up"/>
                    <img src={vatsy_selection_quantity} alt="selection quantity - vatsy" width={300} onClick={()=> handleSeeImage(vatsy_selection_quantity, "vatsy")} className="animate-up"/>
                    <img src={vatsy_category_de_depense} alt="category depense - vatsy" width={300} onClick={()=> handleSeeImage(vatsy_category_de_depense, "vatsy")} className="animate-up"/>
                    <img src={vatsy_historique_de_vente} alt="historique vente - vatsy" width={300} onClick={()=> handleSeeImage(vatsy_historique_de_vente, "vatsy")} className="animate-up"/>
                    <img src={vatsy_historique_de_depense} alt="historique depense - vatsy"width={300} onClick={()=> handleSeeImage(vatsy_historique_de_depense, "vatsy")}  className="animate-up"/>
                </div>
                <div className="screenShootWeb portfolio-grid" style={{display: projectName === "portfolio" ? 'grid' : 'none'}}>
                    <img src={portfolio_home} alt="home - portfolio" width={300} onClick={()=> handleSeeImage(portfolio_home, "portfolio")} className=" animate-up"/>
                    <img src={portfolio_vatsy} alt="vatsy - portfolio" width={300} onClick={()=> handleSeeImage(portfolio_vatsy, "portfolio")} className=" animate-up"/>
                    <img src={portfolio_buyer} alt="buyer - portfolio" width={300} onClick={()=> handleSeeImage(portfolio_buyer, "portfolio")} className=" animate-up"/>
                    <img src={portfolio_projects} alt="projects - portfolio" width={300} onClick={()=> handleSeeImage(portfolio_projects, "portfolio")} className=" animate-up"/>
                    <img src={portfolio_vatsy_screen} alt="vatsy screen - portfolio" width={300} onClick={()=> handleSeeImage(portfolio_vatsy_screen, "portfolio")} className=" animate-up"/>
                    <img src={portfolio_buyer_screen} alt="buyer screen - portfolio" width={300} onClick={()=> handleSeeImage(portfolio_buyer_screen, "portfolio")} className=" animate-up"/>
                </div>
            </div>

            {openPictureModal && selectedPicture && (
                <PictureModal
                    containerClass={""}
                    moovImage={moveImage}
                    picture={selectedPicture}
                    closeModal={handleCloseModalPicture}
                />
            )}
        </div>    
    )
}

export default ScreenShoot;